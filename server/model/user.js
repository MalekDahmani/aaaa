import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    firstName:String,
    LastName:String,
    age: Number,

})

module.exports = mongoose.model('data',dataSchema)