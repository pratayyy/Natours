const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: 'string',
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: 'string',
  password: {
    type: 'string',
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: 'string',
    required: [true, 'Please confirm your password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
