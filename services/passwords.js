const bcrypt = require('bcrypt');

function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

function comparePassword(text, password) {
  return bcrypt.compare(text, password);
}

module.exports = { hashPassword, comparePassword };
