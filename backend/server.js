import express from 'express'
// import next from 'next'
import color from 'colors'
import cors from 'cors'
import connectDB from './config/connection.js'
import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
import errorHandler from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoutes.js'
import adminRoute from './routes/adminRoutes.js'

const port = process.env.PORT || 5000

dotenv.config()

connectDB()

const app = express()


// app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/',userRoute)
app.use('/admin',adminRoute)

app.use(errorHandler)

app.listen(port,()=>console.log(`Server started on port ${port}`))


