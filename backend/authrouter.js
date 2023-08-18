const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const firebaseConfig = require('../config/firebaseConfig');

// Initialize Firebase Admin SDK with your service account credentials
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig.serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
});

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  const idToken = req.header('Authorization');

  if (!idToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      return next();
    })
    .catch((error) => {
      return res.status(401).json({ error: 'Unauthorized' });
    });
};

// Routes
router.post('/register', (req, res) => {
  // Handle user registration logic here
});

router.post('/login', (req, res) => {
  // Handle user login logic here
});

router.get('/user', isAuthenticated, (req, res) => {
  // Return authenticated user's information
  res.json({ user: req.user });
});

module.exports = router;
