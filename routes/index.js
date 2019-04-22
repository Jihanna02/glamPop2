const path = require("path");
const router = require("express").Router();
const lookRoutes = require( "./lookRoutes" );
const userRoutes = require( "./userRoutes" );

router.use( "/api/users", userRoutes );
router.use( "/api/looks", lookRoutes );

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;