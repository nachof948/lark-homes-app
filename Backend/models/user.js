import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    seller: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        default: ''
    },
    biography: {
        type: String,
        default: ''
    },
    imageProfile: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    propertyLikes: {
        type: [String],
        default: []
    }
}, { timestamps: true });

const User = mongoose.model('Usuario', userSchema);

export default User;
