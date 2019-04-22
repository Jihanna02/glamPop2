const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up routing
app.use(routes);

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/fleekshow';

//Heroku, connect to mlabs
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}

//Local machine, connect to local db  
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});