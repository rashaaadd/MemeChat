import express from 'express'
import {
    registerUser,
    loginUser,
    getHomePage
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()


router.post("/register",registerUser)


router.post("/login",loginUser)

router.get('/user',protect,getHomePage)


export default router;