// require('dotenv').config()
// const express = require("express")
// const path = require("path")
// const hbs = require("hbs")
// const app = express()
// // console.log(__dirname)
// //path __dirname, ../public
// const publicDir = path.join(__dirname, "../frontend/public")
// app.use(express.static(publicDir))
// const layoutsDir = path.join(__dirname, "../frontend/layouts")
// hbs.registerPartials(layoutsDir)
// // app.get("/x", (req,res)=>{
// //     let p = path.join(__dirname, "../x.html")
// //     res.sendFile(p)
// // })
// //npm i hbs
// const viewsDir = path.join(__dirname, "../frontend/views")
// app.set("view engine", "hbs") //ejs pug ....
// app.set("views", viewsDir) // to change views dir

// app.get("/", (req,res)=>{
//     res.render("home")
// })
// app.get("/about", (req,res)=>{
//     res.render("about")
// })

// module.exports = app
require('dotenv').config()
const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const publicDir = path.join(__dirname, "../frontend/public")
const layoutsDir = path.join(__dirname, "../frontend/layouts")
const viewsDir = path.join(__dirname, "../frontend/views")
app.use(express.static(publicDir))
app.set("view engine", "hbs") //ejs pug ....
app.set("views", viewsDir) // to change views dir
hbs.registerPartials(layoutsDir)
app.get("/", (req,res)=>{    res.render("home") })
app.get("/about", (req,res)=>{    res.render("about") })
module.exports = app
