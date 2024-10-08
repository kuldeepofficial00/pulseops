const jwt = require('jsonwebtoken');

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET || 'pulseops_jwt_secret', {
    expiresIn: '7d'
  });
};

module.exports = { generateToken };
