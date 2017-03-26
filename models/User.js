const mongoose = require('mongoose')
const crypto = require('crypto')

var userSchema = mongoose.Schema({
  name: {
      type: String,
      required: [true, 'Name is required'],
      unique: [true, 'Name must be unique!'],
  },
  email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email must be unique'],
      validate: {
          validator: function (val) {
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return pattern.test(val) 
          },
          message: 'Email format must be valid'
      }
  },
}, {
  timestamps: true
})


var User = mongoose.model('User', userSchema)

module.exports = User