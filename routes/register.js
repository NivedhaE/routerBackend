const express = require('express');
const Registration = require('../models/Registration');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, contact, address, gender } = req.body;
  const newRegistration = new Registration({ name, email, contact, address, gender });
  await newRegistration.save();
  res.status(201).send('Registration successful');
});

router.get('/', async (req, res) => {
  const registrations = await Registration.find();
  res.json(registrations);
});

router.delete('/:id', async (req, res) => {
  await Registration.findByIdAndDelete(req.params.id);
  res.status(200).send('Registration deleted');
});

module.exports = router;
