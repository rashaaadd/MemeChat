import express from 'express'
import {
    registerUser,
    loginUser,
    getUser,
    data
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()


router.post("/register",registerUser)


router.post("/login",loginUser)

router.get('/user',protect,getUser)

router.get('/hello',data)


export default router;