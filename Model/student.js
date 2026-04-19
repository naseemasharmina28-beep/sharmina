const mongoose = require('mongoose')

var schema =mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
    Mark:Number
})


var stuModel=mongoose.model("studentdata",schema);
module.exports =stuModel;