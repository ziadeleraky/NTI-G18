const dealWithData = require("../helper/dealWithData.helper")
const home = (req,res)=>{
    const data = dealWithData.readFromJSON("database/user.json")
    res.render("home", {
        pageTitle:"Home Page- User App",
        data
    })
}
const add = (req, res)=>{
    res.render("add", {
        pageTitle:"Add User - User App"
    })
}
module.exports = {
    home, add
}