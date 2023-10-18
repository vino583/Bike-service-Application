const mongoose = require('mongoose')
//To provide schema for registration 
const channelschema = new mongoose.Schema({
    name:{
        type:String,require:true
    },
    email:{
        type:String,require:true
    },
    phone:{
        type:Number,require:true
    },
    password:{
        type:String,require:true
    },
})
const Channelmodel = mongoose.model("register",channelschema);
module.exports= Channelmodel;
//To provide schema for book the service 
const bookschema = new mongoose.Schema({
    name:{
        type:String,require:true
    },
    email:{
        type:String,require:true
    },
    phone:{
        type:Number,require:true
    },
    vechical:{
        type:String,require:true
    },
    model:{
        type:String,require:true
    },
    date:{
        type:Date,require:true
    },
    service:{
        type:String,require:true
    }, 
    status:{
        type:String,default:"Pending"
    }
})
const Book = mongoose.model("book",bookschema);
module.exports= Book;

//To provide schema for add service 
const addschema = new mongoose.Schema({
    sname:{
        type:String,require:true
    },
    money:{
        type:Number,require:true
    },
    mini:{
        type:Number,require:true
    },
    desc:{
        type:String,require:true
    },
})
const Adds = mongoose.model("adds",addschema);
module.exports= Adds;
