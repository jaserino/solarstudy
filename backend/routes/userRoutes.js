const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { secure } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
// can add the secure funtion to apply auth middleware to any route we create
router.get('/profile', secure, getMe);

module.exports = router;
