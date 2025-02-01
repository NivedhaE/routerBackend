const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  address: String,
  gender: String
});

module.exports = mongoose.model('Registration', RegistrationSchema);
