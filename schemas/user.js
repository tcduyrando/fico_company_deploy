const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    type: String,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024
  },
  dob: {
    type: String,
    default: '01/01/1999'
  },
  location: {
    type: String,
    default: 'Ho Chi Minh'
  },
  profilePicture: {
    type: String,
    required: false, default: '/uploads/users/dafault_profile.jpg'
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true })

module.exports = mongoose.model('user', UserSchema)

