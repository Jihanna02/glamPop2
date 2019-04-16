const router = require("express").Router();
const db = require("../models");
const { User, Looks } = require("../models");

// Matches with "/api/looks/"
//route for post new look to database and returns information
router.post("/", function ( req, res ) {
	// console.log("this is a post")
	// console.log(req.body);
	// console.log("__________")
	Looks.create(req.body)
		.then((res) => {
			res.json(res);
		})
		.catch((err) => {
			res.json(err);
		});

	})

// Matches with "/api/looks/", returns everything in the "looks" collection
router.get("/", function (req,res){
 	Looks.find()
		.then(response=>{
			res.json(response)

		})
	})

// Matches with "/api/looks/:id", finds a single look by id
router.get("/:id", function (req,res){
	Looks.find({ _id: req.params.id})
		.then(response=>{
			res.json(response)
		})

})

// Matches with "/api/looks/:id", finds a single look by id and deletes
router.delete("/delete/:id", function (req,res){
	Looks.findOneAndDelete({ _id: req.params.id})
		.then(response=>{
			res.json(response);
		})
})

// Matches with "/api/looks/:id", finds a single look by id
router.put("/update/:id", function ( req, res, next ) {

	Looks.findOneAndUpdate({_id: req.params.id}, req.body)
	.then(function(){
		Looks.findOne({_id: req.params.id}).then(function(categoryName){
			res.send(categoryName);
		})
	})

	})
// router.post("/update/", function (req, res){

// 	Looks.findOneAndUpdate({_id: req.body.imgID}, {$set:{categoryName:req.body.categoryName}}, {new: true}, (err, doc) => {
// 		if (err) {
// 			res.json(err);
// 		}
// 		res.json(response);
// 	});

// })




module.exports = router;