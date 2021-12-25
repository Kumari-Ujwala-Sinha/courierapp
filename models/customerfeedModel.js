const mongoose = require('mongoose')

const customerfeedSchema = mongoose.Schema({
    deliveryitem:{
        type:String,
        required:[true, "Please enter delivery item name"],   
    },
    customer:{
     type:String,
     required:true
    },
    Phone:{
        type:String
    },
    Message:{
        type:String,
    }
   
},{
    timestamps:true
})

module.exports = mongoose.model("Customerfeed", customerfeedSchema)