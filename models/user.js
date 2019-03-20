var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  created_at: Date,
  updated_at: Date,
  password: String
});

UserSchema.pre('save', function(next){
 now = new Date();
 this.updated_at = now;
 if ( !this.created_at ) {
  this.created_at = now;
 }
 next();
 
});

var User = mongoose.model("User", UserSchema);

module.exports = User;