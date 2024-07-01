import { Comment } from '../models/comments.js'

export const createComment = async(req, res, next) =>{
    const { content, userRef, postId } = req.body
    try {
        if(userRef !== req.user.id){
            return res.status(401).json({message: 'No estas atorizado a escribir un comentario'})
        }
        const newComment = await Comment.create({content, userRef, postId})
        await newComment.save()
        res.status(200).json(newComment)
    } catch (error) {
        next(error)
    }
} 

export const getPostComments = async(req, res, next) =>{
    const { id } = req.params
    try {
        const comments = await Comment.find({postId: id}).sort({createdAt: -1});
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}

export const likeComment = async(req, res, next) =>{
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id)
        if(!comment){
            return res.status(404).json({message: 'No se encontro ese comentario'})
        }
        const userIndex = comment.likes.indexOf(req.user.id);
        if(userIndex === 1-1){
            comment.likes.push(req.user.id)
        }else{
            comment.likes.splice(userIndex, 1)
        }
        await comment.save()
        res.status(200).json(comment)
    } catch (error) {
        next(error)
    }
}

export const editComment = async(req, res, next) =>{
    const { id } = req.params;
    const { content } = req.body
    try {
        const comment = await Comment.findById(id)
        if(!comment){
            return res.status(404).json({message:'No se encontro ese comentario'})
        }
        if(comment.userRef !== req.user.id){
            return res.status(401).json({message:'No estas autorizado a editar este comentario'})
        }
        const editedComment = await Comment.findByIdAndUpdate(id, {content}, {new: true})
        res.status(200).json(editedComment)
    } catch (error) {
        next(error)
    }
}

export const deleteComment = async(req, res, next) =>{
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        if(!comment){
            return res.status(404).json({message:'No se encontro ese comentario'})
        }
        if(comment.userRef !== req.user.id){
            return res.status(401).json({message:'No estas autorizado a eliminar este comentario'})
        }
        await Comment.findByIdAndDelete(id);
        res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        next(error)
    }
}