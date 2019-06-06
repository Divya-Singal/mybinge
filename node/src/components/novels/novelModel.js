var mongoose    =   require("mongoose");
//mongoose.connect('mongodb://localhost:27017/mybinge',{ useNewUrlParser: true });
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var novelSchema  = {
    "userId" : String, /* ? */
    "title"  : String,
    "author" : String,
    "endDate": Date,
    "startDate": Date,
    "comments" : String,
    "quotes" : Array

};
// create model if not exists.
module.exports = mongoose.model('Novel',novelSchema);
