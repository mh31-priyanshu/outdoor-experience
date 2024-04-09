const dotenv = require("dotenv");
dotenv.config();


const express = require('express')

const app = express()

//routes
app.get('/',(req, res)=>{
    res.json({msgs:"Welcome to root page"})
})


//listener to port
app.listen(process.env.PORT, ()=>{
    console.log("created")
})