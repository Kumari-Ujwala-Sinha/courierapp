const mongoose = require('mongoose')

const customerfeedSchema = mongoose.Schema({
    deliveryitem:{
        type:String,
          
    },
    customer:{
     type:String,
     required:true
    },
    Phone:{
        type:String
    },
    name:{
        type:String
    },

    Message:{
        type:String,
    }
   
},{
    timestamps:true
})

module.exports = mongoose.model("Customerfeed", customerfeedSchema)