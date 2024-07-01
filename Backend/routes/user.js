import express from 'express'
import { updateUser, deleteUser, getUserProperties, getUser } from '../controllers/user.js'
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router()

router.post('/update/:id', verifyUser, updateUser)
router.delete('/delete/:id', verifyUser, deleteUser)
router.get('/properties/:id', verifyUser, getUserProperties)
router.get('/details/:id', getUser)

export default router