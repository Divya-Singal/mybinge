//get mongo from Model
//const novelSchema = require("./novelModel");
var path = require('path');
var novelSchema = require( path.resolve( __dirname, "./novelModel.js" ) );
var out = require(path.resolve(__dirname, "../../library/response.js")).Output();
exports.getNovels= function(req,res){

	var response = {};
        novelSchema.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });


}


exports.putNovels= function(req,res){
	//res.json({"error" : false,"message" : "Hello World"});

	const new_novel = req.body;
	let novel = new novelSchema({
		"userId" : new_novel.userid,
    	"title"  : new_novel.title,
    	"author" : new_novel.author,
    	"endDate": new_novel.endDate,
    	"startDate": new_novel.startDate,
    	"comments" : new_novel.comments,
   		"quotes" 	: new_novel.quotes
	});
	console.log(new_novel);
	   novel.save((err) => {
            if(err) {
				console.log(err);
				//const obj = out('false', 'whats wrong');
				res.json({'type':'false'});
              //  return next(err)
            }else {
				console.log('Okay i am in!');
				//const obj = out('true', 'added successfully');
				res.json({'type': 'true'});
				
			}
        });
}
