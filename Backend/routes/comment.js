import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js'
import { createComment, deleteComment, editComment, getPostComments, likeComment } from '../controllers/comment.js'
const router = express.Router()

router.post('/create', verifyUser, createComment);
router.get('/getComment/:id', getPostComments);
router.put('/likeComment', verifyUser, likeComment);
router.put('/editComment/:id', verifyUser, editComment),
router.delete('/deleteComment/:id', verifyUser, deleteComment);

export default router