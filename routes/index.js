const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home'); // Make sure home.ejs exists
});

module.exports = router;
