var crypto = require('crypto');
//var rbac = require('mongoose-rbac');

var config = require('../config/config.json');
var mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb://test_user:test@kahana.mongohq.com:10015/app22802749", {});
module.exports.Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
    email: {
      required: true,
      type: String,
      trim: true,
      unique: true
    },
  },

  {
    versionKey: false
  });

//userSchema.plugin(rbac.plugin);

module.exports.User = mongoose.model('User', userSchema);
