const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoute = require('./routes/register');

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes setup
app.use('/api/register', registerRoute); // Register route for handling registration requests

// MongoDB connection string (Directly added)
const dbURI = 'mongodb+srv://db-nivi:Mininivi8499@cluster0.wmxjq.mongodb.net/registration?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
