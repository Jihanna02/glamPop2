const router = require("express").Router();
const db = require("../models");
const {Looks} = require("../models");

// Matches with "/api/looks/"
//route for post new look to database and returns information
router.post("/", function (req, res) {
	Looks.create(req.body)
		.then((res) => {
			res.json(res);
		})
		.catch((err) => {
			res.json(err);
		});

})

// Matches with "/api/looks/", returns everything in the "looks" collection
router.get("/", function (req, res) {
	Looks.find()
		.then(response => {
			res.json(response)

		})
})


// Matches with "/api/looks/:userID", returns everything in the "looks" collection by user
router.get("/user/:userID", function (req, res) {
	Looks.find({
			userID: req.params.userID
		})
		.then(response => {
			res.json(response)
		})
})

// Matches with "/api/looks/:userID/:filter", returns everything in the "looks" collection by user with a specific filter
router.get("/user/:userID/:filter", function (req, res) {
	Looks.find({
			userID: req.params.userID,
			categoryName: req.params.filter
		})
		.then(response => {
			res.json(response)
		})
})


// Matches with "/api/looks/:id", finds a single look by id
router.get("/:id", function (req, res) {
	Looks.find({
			_id: req.params.id
		})
		.then(response => {
			res.json(response)
		})

})

// Matches with "/api/looks/:id", finds a single look by id and deletes
router.delete("/delete/:id", function (req, res) {
	Looks.findOneAndDelete({
			_id: req.params.id
		})
		.then(response => {
			res.json(response);
		})
})

// Matches with "/api/looks/update/:id", finds a single look by id and updates
router.put("/update/:id", function (req, res, next) {

	Looks.findOneAndUpdate({
			_id: req.params.id
		}, req.body)
		.then(function () {
			Looks.findOne({
				_id: req.params.id
			}).then(function (categoryName) {
				res.send(categoryName);
			})
		})

})



module.exports = router;