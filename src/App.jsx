import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    cholesterol: "",
    bloodPressure: "",
    sysBp: "",
    diaBp: "",
    bmi: "",
    prevalentStroke: "",
    glucose: "",
    heartRate: "",
    cigarettesPerDay: "",
    currentSmoker: "",
    prevalentHighBp: "",
    diabetes: "",
    bpMeds: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use environment variable for the API URL
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await axios.post(`${API_URL}/chd-risk`, formData);
      setResult(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">CHD Diagnosis</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Cholesterol Level:</label>
            <input
              type="number"
              name="cholesterol"
              value={formData.cholesterol}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Educational Level:</label>
            <select
              name="educationalLevel"
              value={formData.educationalLevel}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Systolic Blood Pressure (SysBp):</label>
            <input
              type="number"
              name="sysBp"
              value={formData.sysBp}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Diastolic Blood Pressure (DiaBp):</label>
            <input
              type="number"
              name="diaBp"
              value={formData.diaBp}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">BMI:</label>
            <input
              type="number"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Prevalent Stroke:</label>
            <select
              name="prevalentStroke"
              value={formData.prevalentStroke}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Glucose:</label>
            <input
              type="number"
              name="glucose"
              value={formData.glucose}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Heart Rate:</label>
            <input
              type="number"
              name="heartRate"
              value={formData.heartRate}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">No. of Cigarettes per Day:</label>
            <input
              type="number"
              name="cigarettesPerDay"
              value={formData.cigarettesPerDay}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Current Smoker:</label>
            <select
              name="currentSmoker"
              value={formData.currentSmoker}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Prevalent High Blood Pressure:</label>
            <select
              name="prevalentHighBp"
              value={formData.prevalentHighBp}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Diabetes:</label>
            <select
              name="diabetes"
              value={formData.diabetes}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-green-700 font-medium">Blood Pressure Medications (BpMeds):</label>
            <select
              name="bpMeds"
              value={formData.bpMeds}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-green-400 rounded-lg focus:ring-green-500 focus:border-green-600"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
        {result && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold text-green-600">Your CHD Risk:</h2>
            <p className="text-lg text-green-700">{result.risk}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
