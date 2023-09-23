const express = require("express");
const router = express.Router();
const userCntroller = require("../controllers/userController");
const bookCntroller = require("../controllers/bookController");
const authMiddleware = require("../middlewares/authMiddleware");

// register/login user
router.post("/register",userCntroller.register);
router.post("/login",userCntroller.login);
router.post("/get-user-info-by-id", authMiddleware, userCntroller.info)

// get books
router.get("/books",bookCntroller.getAllBooks);


module.exports = router;