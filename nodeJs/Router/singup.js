const express = require('express');
const router = express.Router();
const signupController = require('../Controller.js/Singup');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Call the checkSignup function from signupController to insert the user into the database
    const userId = await signupController.checkSignup(name, email, password);
    const first = await signupController.getAll(name, email, password)
    console.log(first)
    res.status(201).json({ message: 'User created successfully', userId });
  } catch (error) {
    console.error('Error inserting user into the database:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

module.exports = router;
