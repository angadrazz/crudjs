// const express = require("express")
// const app = express() 



// app.get('/',(req,res) =>{
//     console.log("What are you doing?")
    // res.send("Today's i am going to College")
    // res.status(500)
    // json("What is your name")
    // res.render("index")

// app.listen(3000)

// console.log("Hello")
// let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// console.log( sum(1, 2) ); // 3

// program to find the factorial of a number
// function factorial(x) {

    // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 30;

// calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }

// const express = require("express");
// const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");

// const app = express();

// app.use(bodyParser.json());

// const withDB = async (operations, res) => {
//   try {
//     const client = await MongoClient.connect(
//       "mongodb+srv://monesh:Venkul123@cluster0.pa4q2tq.mongodb.net/?retryWrites=true&w=majority",
//       { useUnifiedTopology: true, useNewUrlParser: true }
//     );
//     const db = client.db("my-blog");
//     await operations(db);
//     client.close();
//   } catch (error) {
//     res.status(500).json({ message: "Error connecting to db", error });
//   }
// };

// app.get("/api/articles/:name", async (req, res) => {
//   withDB(async (db) => {
//     const articleName = req.params.name;
//     const articleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     res.status(200).json(articleInfo);}, res);
// });

// app.post("/api/articles/:name/add-comments", (req, res) => {
//   const { username, text } = req.body;
//   const articleName = req.params.name;

//   withDB(async (db) => {
//     const articleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     await db.collection("articles").updateOne(
//       { name: articleName },
//       {
//         $set: {
//           comments: articleInfo.comments.concat({ username, text }),
//         },
//       }
//     );
//     const updatedArticleInfo = await db
//       .collection("articles")
//       .findOne({ name: articleName });
//     res.status(200).json(updatedArticleInfo);
//   }, res);

// });

// app.listen(8000, () => {
//   console.log("Server listening on port 8000");
// });

// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// expected output:
// "a: somestring"
// "b: 42"
