const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    deliveryitem:{
        type:String,
        required:[true, "Please enter delivery item name"],
        
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
    Frangible:{
        type:String,
    },
    Weight:{
        type:Number,
    },
    CourierType:{
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
    deliveryType:{
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