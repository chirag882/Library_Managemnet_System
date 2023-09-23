const express = require("express");
const router = express.Router();
const userCntroller = require("../controllers/userController");
const bookCntroller = require("../controllers/bookController");

// register/login user
router.post("/register",userCntroller.register);
router.post("/login",userCntroller.login);

// get books
router.get("/books",bookCntroller.getAllBooks);


module.exports = router;