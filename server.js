const express = require("express")
const app = express() 

app.get('/',(req,res) =>{
    console.log("What are you doing?")
    // res.send("Today's i am going to College")
    // res.status(500).json("What is your name")
    res.render("index")
})

app.listen(3000)