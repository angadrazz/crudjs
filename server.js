// const express = require("express")
// const app = express() 



// app.get('/',(req,res) =>{
//     console.log("What are you doing?")
    // res.send("Today's i am going to College")
    // res.status(500)
    // json("What is your name")
    // res.render("index")

// app.listen(3000)

console.log("Hello")
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 30;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}