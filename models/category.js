var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var CategorySchema = new Schema({

	userId: String,
	categoryName: String,
	created_at: Date
});


CategorySchema.pre('save', function(next){
 now = new Date();
 this.updated_at = now;
 if ( !this.created_at ) {
  this.created_at = now;
 }
 next();
});

var Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

