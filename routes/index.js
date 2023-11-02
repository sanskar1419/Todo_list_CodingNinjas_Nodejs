const express = require("express");
const router = express.Router();
// const Todo_List = require("../models/todo_list");
router.use(express.urlencoded());
const homeController = require("../controllers/home_controller");
// console.log("Router is working");
router.get("/", homeController.home);
router.post("/create-task", homeController.Add_task);
module.exports = router;
