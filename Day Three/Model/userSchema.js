const mongoose = require("mongoose")

const schema = new mongoose.Schema({


    name : String,
    age : Number,
    gender : String,
});

const UserModel = new  mongoose.model("user",schema);

module.exports = UserModel;