const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModels');

const secure = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //get the token from the header
      //using split to turn the token into an array [Bearer, token] 0,1
      token = req.headers.authorization.split(' ')[1];
      //verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get the user from verified token but exluding the password
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not Authorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized');
  }
});

module.exports = { secure };
