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
//Handle Request Body
app.use(express.json())

// ############ USER
app.use('/user',userRouter)
//Create User
// app.post('/user',(req,res,next)=>{
//     const {user, pw,nickname} = req.body
//     createUser(user,pw,nickname,res)
// })
// //Get user by ID
// app.get('/user/:id',(req,res,next)=>{
//     const {id} = req.params
//     getUser(id,res)
// })
// ############ TODO
//Get TODO by ID
app.get('/todo',(req,res,next)=>{
    res.json('REACHED TODO GET ')
})

app.use((req,res,next)=>{
    res.status(404).json("Path Not found")
})

app.listen(port , ()=>{console.log("Server is readt on PORT =>", +port)})