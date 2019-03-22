const router = require("express").Router();
const db = require("../models");
const { User, Looks } = require("../models");

// Matches with "/api/looks/"
//route for post new look to database and returns information
router.post("/", function ( req, res ) {
	Looks.create(req.body)
		.then((dbUser) => {
			res.json(dbUser);
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
 				console.log(response)
 			})

	})
 // Matches with "/api/categories/id/id:", returns everything in the ID collection
 router.get("/imgURL/:imgURL", function (req,res){
	Looks.find()
	.then(response=>{
		res.json(response)
		console.log(response)
	})
})

 // Matches with "/api/categories/id/id:", returns everything in the ID collection
 router.get("/id/:id", function (req,res){
 		Looks
 		.findById(req.params.id)
 		.then(response=>{
 			res.json(response)
 			console.log(response)
 		})
	})



module.exports = router;