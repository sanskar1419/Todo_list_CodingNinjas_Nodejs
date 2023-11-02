const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Todo_list_db");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting to DB!!!!!!"));
db.once("open", function () {
  console.log("Succesfully connected to Database!!!!!!!!!!!!!!!!");
});
