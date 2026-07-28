const express = require("express");

const router = express.Router();

const {
    getAuthStatus,
    login,
    register
} = require("../controllers/auth.controller");

router.get("/", getAuthStatus);

router.post("/login", login);
router.post("/register", register);

module.exports = router;