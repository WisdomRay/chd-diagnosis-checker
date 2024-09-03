const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const rdf = require("rdflib");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://chd-diagnosis-checker-new.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
app.use(cors(corsOptions));

// app.use(cors({
//     origin: 'http://localhost:5173', // Allow only requests from this origin
//     methods: ['GET', 'POST'], // Allow only these HTTP methods
//     allowedHeaders: ['Content-Type'] // Allow only these headers
// }));

app.use(bodyParser.json());

// Load RDF file and parse it
// const filePath = path.join(/home/king/Desktop/CHD/CHD-project/server/CHD_ONTO.rdf, "CHD_ONTO.rdf");

const filePath = path.join(__dirname, "data", "CHD_ONTO.rdf");

const ontologyData = fs.readFileSync(filePath, "utf8");

// Convert the local file path to an absolute file URL
const fileUrl = `file://${filePath}`;

const store = rdf.graph();
const mimeType = "application/rdf+xml";

// Use the absolute file URL for parsing
rdf.parse(ontologyData, store, fileUrl, mimeType);

// Extract rules from RDF
function extractRules(store) {
    // Initialize an empty array to store rules
    let rules = [];
  
    // Iterate through each statement in the RDF store
    store.statements.forEach((quad) => {
      // Check if the subject, predicate, and object are defined
      if (quad.subject && quad.predicate && quad.object) {
        rules.push({
          subject: quad.subject.value,
          predicate: quad.predicate.value,
          object: quad.object.value,
        });
      } else {
        // Log the problematic quad to understand what is missing
        console.error("Incomplete quad found:", quad);
      }
    });
  
    return rules;
}

  

const rules = extractRules(store);

// Endpoint to calculate CHD risk
app.post("/chd-risk", (req, res) => {
  const formData = req.body;

  // Process the formData with rules and return the result
  let result = calculateCHDRisk(formData, rules);
  res.json({ risk: result });
});

function calculateCHDRisk(formData, rules) {
  // Implement your risk calculation logic here using formData and extracted rules
  // For now, let's assume a dummy calculation
  let riskScore = 0;

  // Example logic to modify risk score based on rules and formData
  rules.forEach((rule) => {
    if (rule.predicate.includes("someCondition")) {
      riskScore += parseInt(formData[rule.object] || 0);
    }
  });

  return riskScore > 10 ? "Positive" : "Negative";
}
  
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
