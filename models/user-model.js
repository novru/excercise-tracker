const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        username: String,
    }
)

module.exports = user = mongoose.model("User", userSchema)