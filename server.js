const express = require("express")
const app = express() 

app.get('/',(req,res) =>{
    console.log("What are you doing?")
    // res.send("Today's i am going to College")
    res.sendStatus(400)
})

app.listen(3000)