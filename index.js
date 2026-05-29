const express=require("express")
require("dotenv").config()
const cors = require("cors");
const app=express()
const addData=require("./fillForm")
const seeData=require("./getForm")
const {InnovationClub,connectdb}=require("./connectDB")
app.use(express.json())
app.use(cors());
connectdb()
console.log("all ok")
app.get("/",(req,res)=>{
    res.send("<h1>innovation club server is running</h1>")
})
app.use("/api/addData",addData)
app.use("/api/seeData",seeData)
app.listen("3000",()=>{
    console.log("app is running in port 3000")
})