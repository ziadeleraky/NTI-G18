const home = (req,res)=>{
    res.render("home", {
        pageTitle:"Home Page- User App"
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