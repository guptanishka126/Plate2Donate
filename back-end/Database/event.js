const mongoose = require('mongoose');

const eventschema = new mongoose.Schema({
    
    role:{
        type:String,
        required:true,
    },
    
    address:{
        type:String,
        required:true,
    },
    event:{
        type:String,
        required:true,
    },

})


mongoose.model('EVENT', eventschema);