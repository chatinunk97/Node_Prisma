// Express
const express = require('express')
const app = express()
require('dotenv').config()

//
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const port = process.env.PORT

// Create user  function
const userRouter = require('./routers/userRouter')
const todoRouter = require('./routers/todoRouter')
//Handle Request Body
app.use(express.json())

// ############ USER
app.use('/user',userRouter)

app.use('/todolist',todoRouter)


app.listen(port , ()=>{console.log("Server is readt on PORT =>", +port)})