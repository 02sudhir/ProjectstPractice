// server.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let formDataList = []; // Array to store form data

// API endpoint to receive form data
app.post('/api/formdata', (req, res) => {
  const formData = req.body; // Assuming formData is sent in the request body
  formDataList.push(formData); // Store form data in the array
  res.status(200).json({ message: 'Form data received and stored.' });
});

// API endpoint to get all form data
app.get('/api/formdata', (req, res) => {
  res.status(200).json(formDataList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

