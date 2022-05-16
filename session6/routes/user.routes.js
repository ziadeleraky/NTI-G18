const router = require("express").Router()
const userController = require("../app/controller/user.controller")

// routes
router.get("/", userController.home)
router.get("/add", userController.add)

module.exports = router