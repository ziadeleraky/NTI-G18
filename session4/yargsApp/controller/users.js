const dealWithJson = require("./dealWithJson")
const addUser = (userData) => {
    const data = dealWithJson.readData()
    data.push(userData)
    dealWithJson.writeData(data)
}
const allUsers = () => {

}
const singleUser = (userId) => {

}
const editUser = (userId, newData)=>{

}
const delUser = (userId)=>{

}
module.exports = {addUser, editUser, allUsers, singleUser, delUser}