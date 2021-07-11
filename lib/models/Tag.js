let mongoose = require("mongoose");

let data = new mongoose.Schema({
    Guild: String,
    Name: String,
    Body: String
})

module.exports = mongoose.model("tag", data);