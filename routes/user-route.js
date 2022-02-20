const express = require("express")
const router = express.Router();

const { createUser, getUsers } = require("../controllers/users")

router.route("/users/:username?").post(createUser);
router.route("/users").get(getUsers);

module.exports = router;