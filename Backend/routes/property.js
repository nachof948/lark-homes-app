import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js'
import { createProperty, deleteProperty, getProperty, updateProperty, searchProperties } from '../controllers/property.js'

const router = express.Router()

router.post('/create', verifyUser, createProperty);
router.delete('/delete/:id', verifyUser, deleteProperty)
router.put('/update/:id', verifyUser, updateProperty)
router.get('/property/:id', verifyUser, getProperty)
router.get('/search', searchProperties)


export default router