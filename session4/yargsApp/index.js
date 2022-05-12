//npm init --y
// npm i yargs validator chalk@4.0.0
const users = require('./controller/users')
const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"add new user data",
    builder:{
        id:{},
        name:{},
        email:{},
        status:{},
        age:{},
        createdAt:{}
    },
    handler: function(argv){
        console.log("add new user");
    }
})
yargs.command({
    command:"showAll",
    describe:"show all users data",
    handler: function(){
        console.log("show all users");
    }
})
yargs.command({
    command:"showUser",
    describe:"show single user data",
    builder:{
        id:{}
    },
    handler: function(argv){
        console.log("show single user");
    }
})
yargs.command({
    command:"delUser",
    describe:"delete single user data",
    builder:{
        id:{}
    },
    handler: function(argv){
        console.log("delete single user");
    }
})
yargs.command({
    command:"editUser",
    describe:"show single user data",
    builder:{
        userId:{},
        id:{},
        name:{},
        email:{},
        status:{},
        age:{}
    },
    handler: function(argv){
        console.log("edit single user");
    }
})
yargs.argv