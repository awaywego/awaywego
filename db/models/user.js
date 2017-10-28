const mongoose = require('mongoose');
const db = require('../config');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const Promise = require('bluebird');

let userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profilePic: String
});

userSchema.methods.comparePassword = function(pwd) {
  return bcrypt.compare(pwd, this.password);
};

userSchema.pre('save', function(next) {
  return bcrypt.hash(this.password, 10).then(hash => {
    this.password = hash;
    next();
  });
});

var User = mongoose.model('User', userSchema);
module.exports = User;
