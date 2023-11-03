const mongoose = require("mongoose");
// Connecting to Database
mongoose.connect("mongodb://localhost/Todo_list_db");

// Aquiring the connection
const db = mongoose.connection;

// If there is error print error
db.on("error", console.error.bind(console, "Error in connecting to DB!!!!!!"));

// If connection is working print this
db.once("open", function () {
  console.log("Succesfully connected to Database!!!!!!!!!!!!!!!!");
});
