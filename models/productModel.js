const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    deliveryitem:{
        type:String,
           
    },
    customer:{
     type:String,
     required:true
    },
    ServiceType:{
        type:String
    },
    SedndingAddress:{
        type:String,
    },
    Price:{
        type:Number,
    },
    secureProduct:{
        type:Boolean,
    },
    Weight:{
        type:Number,
    },
    Height:{
        type:Number,
    },
    Width:{
        type:Number,
    },
    Length:{
        type:Number,
    },
    CourierType:{
        type:String,
    },
    Distance:{
        type:String,
    },
    CourierInfo:{
        type:String,
    },
    addresstodeli:{
        type:String,
        required:[true, "Please enter address to be delivered"],
    },
    category:{
        type:String,
        required:[true, "Please enter address to be delivered"],
    },
    deliveryboy:{
        type:String,
        required:[true, "Please enter the delivery boy name"]
    },
    deliveryMode:{
        type:String,
    },
    paymentMode:{
        type:String,
    },
    pickedStatus:{
        type:Boolean,
        default:false
    },
    deliveredStatus:{
        type:Boolean,
        defaul:false
    },
     deliveryaccepted:{
        type:String,
        default:"toaccept"
    },
    image:{
        type:String,
       
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Product", productSchema)