const mongoose = require("mongoose");
const moment = require("moment");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: moment().toDate() },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Users", userSchema);
