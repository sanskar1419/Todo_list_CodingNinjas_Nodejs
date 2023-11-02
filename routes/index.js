const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
// console.log("Router is working");
router.get("/", homeController.home);
router.use(express.urlencoded());
router.post("/create-task", homeController.Add_task);
module.exports = router;
