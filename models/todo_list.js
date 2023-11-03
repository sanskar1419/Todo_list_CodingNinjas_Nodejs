// Aquiring mongoose but same instance will be created
const mongoose = require("mongoose");

// Creating Schema for the storing document
const taskSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});

// Storing all the document as collection in Todo_list
const Todo_List = mongoose.model("Todo_list", taskSchema);
// Exporting Todo_List
module.exports = Todo_List;
