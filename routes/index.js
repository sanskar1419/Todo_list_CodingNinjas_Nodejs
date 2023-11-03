// Firing the router when request came
const express = require("express");
const router = express.Router();
// const Todo_List = require("../models/todo_list");

// Using the express. urlencodeded to store them as key and value
router.use(express.urlencoded());
// Firing the controller
const homeController = require("../controllers/home_controller");
// console.log("Router is working");

// route to home controller
router.get("/", homeController.home);
// route to add task controller
router.post("/create-task", homeController.Add_task);
// route to delete  task controller
router.post("/delete_todo_items", homeController.delete_task);
module.exports = router;
