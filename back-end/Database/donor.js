const mongoose = require('mongoose');

const donorschema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },

})


mongoose.model('donorschema', donorschema);