import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regularPrice:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    bathrooms:{
        type:Number,
        required:true
    },
    bedrooms:{
        type:Number,
        required:true
    },
    furnished:{
        type:Boolean,
        required:true
    },
    parking:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    offer:{
        type:Boolean,
        required:true
    },
    imageUrls:{
        type:Array,
        required:true
    },
    likes:{
        type:[String],
        default: []
    },
    userRef:{
        type: String,
        required:true
    }
}, {timestamps: true})

const Property = mongoose.model('Property', propertySchema);

export default Property