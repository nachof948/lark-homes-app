import mongoose, { model } from 'mongoose'

const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    userRef:{
        type: String,
        required: true
    },
    postId:{
        type: String,
        required: true
    },
    likes:{
        type: Array,
        default: []
    }
}, {timestamps: true})

export const Comment = mongoose.model('Comment', commentSchema)

export default Comment