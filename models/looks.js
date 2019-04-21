var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var LookSchema = new Schema({

	imgURL: String,
	imgAlt: String,
	categoryName: String,
	userID: String,
	created_at: Date
});


LookSchema.pre('save', function(next){
 now = new Date();
 this.updated_at = now;
 if ( !this.created_at ) {
  this.created_at = now;
 }
 next();
});

var Looks = mongoose.model("Looks", LookSchema);

module.exports = Looks;

