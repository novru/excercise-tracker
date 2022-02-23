const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisechema = Schema(
    {
        userId: String,
        userName: String,
        date: Date,
        duration: Number,
        description: String
    }
)

module.exports = exercise = mongoose.model("Exercise", exercisechema)