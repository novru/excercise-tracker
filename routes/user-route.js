const express = require("express")
const router = express.Router();

const { createUser } = require("../controllers/users")

router.route("/users").get(createUser);

module.exports = router;