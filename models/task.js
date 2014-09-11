var crypto = require('crypto');
//var rbac = require('mongoose-rbac');

var config = require('../config/config.json');
var mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb://test_user:test@kahana.mongohq.com:10015/app22802749", {});
module.exports.Schema = mongoose.Schema;


var taskSchema = new mongoose.Schema({
    text: {
      type: String,
    },
    complete: {
      type: Boolean,
    },
  },

  {
    versionKey: false
  });

//userSchema.plugin(rbac.plugin);

module.exports.Task = mongoose.model('Task', taskSchema);
