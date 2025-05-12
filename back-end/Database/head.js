const mongoose = require('mongoose');

const headschema = new mongoose.Schema({
    
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


mongoose.model('headschema', headschema);