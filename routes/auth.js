const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // make sure the path is correct

// Show login form
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Handle login logic
router.post('/auth/login', authController.login);

// Show register form
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Handle register logic
router.post('/register', authController.register);

module.exports = router;
