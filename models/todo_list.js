const mongoose = require("mongoose");
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

const Todo_List = mongoose.model("Todo_list", taskSchema);
module.exports = Todo_List;
