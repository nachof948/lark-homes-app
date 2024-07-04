import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js'
import { createProperty, deleteProperty, getProperty, updateProperty, searchProperties, likeProperty } from '../controllers/property.js'

const router = express.Router()

router.post('/create', verifyUser, createProperty);
router.delete('/delete/:id', verifyUser, deleteProperty)
router.put('/update/:id', verifyUser, updateProperty)
router.put('/likeProperty/:id', verifyUser, likeProperty)
router.get('/property/:id', getProperty)
router.get('/search', searchProperties)


export default router