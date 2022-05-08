//intial, cond, inc-dec  null, null, null
// for(;;){
//     console.log("hello")
//     if(x==0) break
// }
// i=0
// while(true){
//     i++
// }

// var let const
// let x = 5
// x= 6
// let x = 12

// if(true){
//     let x = 6
//     // console.log(x);
// }

// console.log(x);


// x = prompt("x")





// x = prompt("x = ")

// y = prompt("y = ")

// alert(x+y)

//clean code => reusability, minize code, minmize unused variables

// one function do only one function

// function getDataFromUser(msg){
//     return prompt(msg)
//     // return val
// }

// const getMyData = function(msg){
//     return prompt(msg)
// }

// const  getDataFromUser= (msg) => prompt(msg)
// const add = (x,y) => +x + +y
// const sub = (x,y) => +x - +y
// const calc = (val1, val2, op)=>{
//     let result
//     switch(op){
//         case "+": result=val1+val2; break
//         case "-": result=val1-val2; break
//         default: result= "invalid operator"
//     }
//     // let result = op == "+"? add(val1,val2) : sub(val1, val2)
//     return result
// }
// //parseInt   parseFloat   x*1.0   +   Number
// let x = getDataFromUser("please enter x value")
// let op = getDataFromUser("please choose between + and - ")
// let y = getDataFromUser("please enter y value")
// alert(calc(x,y,op))


const  getDataFromUser= (msg) => prompt(msg).trim()
const tempTypes = ["K", "C", "F"]
const fTok = (val) => (val - 32 ) * 5/9 + 273.15
const fToc = (val) => (val - 32) * 5/9
const cTok = (val) => val + 273.15
const cTof = (val) => (val * 9/5) + 32
const kToc = (val) => val-273.15
const kTof = (val) => (val - 273.15) * 9/5 + 32

const calculateTemp = (temp)=>{
    let myTempType = temp[temp.length-1]
    if(!tempTypes.includes(myTempType))
        return "invalid temp type"
    let myTempVal = Number(temp.slice(0, temp.length-1))
    let result = ""
    switch(myTempType){
        case "K":
            result+= `In K  myTempVal = ${myTempVal} 
In C my tempVal = ${kToc(myTempVal)}
In F my tempVal = ${kToF(myTempVal)}`
            break;
        case "C":
            result+= `In C  myTempVal = ${myTempVal} 
In K my tempVal = ${cTok(myTempVal)}
In F my tempVal = ${cTof(myTempVal)}`
            
            break;
        case "F":
            result+= `In F  myTempVal = ${myTempVal} 
In C my tempVal = ${fToc(myTempVal)}
In K my tempVal = ${fTok(myTempVal)}`            
            break;
    }
    return result
}
let temp = getDataFromUser("enter temp in 32C format").toUpperCase()
alert(calculateTemp(temp))











