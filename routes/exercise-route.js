const express = require("express");
const router = express.Router();

const { addExercise, getExercisesLog } = require("../controllers/exercise");

router.route("/users/:_id?/exercises").post(addExercise);
router.route("/users/:_id/logs").get(getExercisesLog);

module.exports = router;
