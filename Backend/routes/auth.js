import express from 'express'
import { signup, signin, logout, google } from '../controllers/auth.js'
const route = express.Router()

route.post('/signup', signup)
route.post('/signin', signin)
route.post('/logout', logout)
route.post('/google', google)

export default route