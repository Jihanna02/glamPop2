const router = require("express").Router();
const db = require("../models");
const { User, Category } = require("../models");

// Matches with "/api/track/"
//route for post new track to database and returns information
router.post("/", function ( req, res ) {
	Category.create(req.body)
		.then((dbUser) => {
			res.json(dbUser);
		})
		.catch((err) => {
			res.json(err);
		});

	})

// Matches with "/api/users/", returns everything in the "users" collection
 router.get("/", function (req,res){
 		Category.find()
 			.then(response=>{
 				res.json(response)
 				console.log(response)
 			})

	})

 // Matches with "/api/categories/id/id:", returns everything in the ID collection
 router.get("/id/:id", function (req,res){
 		Category
 		.findById(req.params.id)
 		.then(response=>{
 			res.json(response)
 			console.log(response)
 		})
	})



module.exports = router;