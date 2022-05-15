//nodemon
//npm i --g nodemon
//    "start": "nodemon server",  => npm start
//"dev":"node server" => npm run dev

const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    res.send("hello from expressjs")
})
app.get("/about", (req, res)=>{
    let x = [{x:1}, {x:2}]
    res.send(x)
})
app.get("/home", (req, res)=>{
    res.send("<h1>hello</h1>")
})
app.listen(3000, ()=>{console.log("server up")})
//localhost:3000