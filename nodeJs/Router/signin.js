// signin.js
const express = require('express');
const router = express.Router();
const signinController = require('../Controller.js/Signin');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Call the checkLogin function from the signinController to verify the login credentials
    const userData = await signinController.checkLogin(email, password);

    // Check if the userData is not empty, which means login is successful
    if (userData.length > 0) {
      console.log('Login successful');
      return res.json({ message: 'Success', user: userData[0] });
    } else {
      console.log('Login failed');
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error querying data:', error);
    return res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
