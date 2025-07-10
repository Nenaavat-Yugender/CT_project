// backend/utils/generateToken.js

import jwt from 'jsonwebtoken';

// Generate JWT token for user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token validity
  });
};

export default generateToken;
