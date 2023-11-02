const Todo_List = require("../models/todo_list");

// Exporting home function for home page
module.exports.home = async function (req, res) {
  try {
    const taskLists = await Todo_List.find({});
    return res.render("home", {
      title: "Todo list | Sanskar Gupta",
      todo_list: taskLists,
    });
  } catch (err) {
    console.log("Error is fetching Task : ", err);
    return;
  }
};

module.exports.Add_task = async function (req, res) {
  try {
    const newTask = await Todo_List.create({
      Description: req.body.Description,
      Category: req.body.Category,
      dueDate: req.body.dueDate,
    });
    console.log("***********", newTask);
    return res.redirect("/");
  } catch (err) {
    console.error("Error in creating a Task:", err);
    // Handle the error appropriately (e.g., sending an error response)
    res.status(500).send("Error in creating a Task");
  }
};

module.exports.delete_task = async function (req, res) {
  try {
    sp = req.query.id;
    console.log(sp);
  } catch (err) {
    console.error("Error in Deleting a Task:", err);
    // Handle the error appropriately (e.g., sending an error response)
    res.status(500).send("Error in creating a Task");
  }
};

module.exports.deleteTodo = function (req, res) {
  sp = req.query.id; // getting the id from ui
  newsp = sp.split(",");
  for (let i = 0; i < newsp.length; i++) {
    // looping over newsp  to delete all the checked value
    TodoLists.findByIdAndDelete(newsp[i], function (err) {
      if (err) {
        console.log("err");
        return;
      }
    });
  }
  return res.redirect("/");
};
