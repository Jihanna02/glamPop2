const router = require("express").Router();
const db = require("../models");
const {
	User
} = require("../models");


// Matches with "/api/users/"
//route for post new user to database and returns information
router.post("/", function (req, res) {
	User.create(req.body)
		.then((dbUser) => {
			res.json(dbUser)
		})
		.catch((err) => {
			res.json(err);
		});

})

// Matches with "/api/users/", returns everything in the "users" collection
router.get("/", function (req, res) {
	User.find()
		.then(response => {
			res.json(response)
			console.log(response)
		})

})

// Matches with "/api/users/:username"
router.get("/:username", function (req, res) {
	User.find({
			username: req.params.username
		})
		.then(response => {
			res.json(response)
			console.log(response)
		})
})

// Matches with "/api/users/:id"
router.get("/id/:id", function (req, res) {
	User
		.findById(req.params.id)
		.then(response => {
			res.json(response)
			console.log(response)
		})


})

router.get("/id/:id/looks/", function (req, res) {
	User
		.findById(req.params.id)
		.then(response => {
			res.json(response)
			console.log(response)
		})


})

module.exports = router;