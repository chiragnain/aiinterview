import express from "express"
import authroutes from "./routes/auth.js"

//just to read things in env file, otherwise it shows undefined if try to access them 
import dotenv from "dotenv"
dotenv.config()

import connectMongoDB from "./db/connectMongoDB.js"

const app=express()
const port=process.env.PORT||8000

app.use(express.json()) // to parse req.body

//app.use to create a middleware
app.use("/auth",authroutes)

app.listen(port,()=>{
    console.log("server is running on port "+ port)
    connectMongoDB()
})