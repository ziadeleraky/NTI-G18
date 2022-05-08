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


// const  getDataFromUser= (msg) => prompt(msg).trim()
// const tempTypes = ["K", "C", "F"]
// const fTok = (val) => (val - 32 ) * 5/9 + 273.15
// const fToc = (val) => (val - 32) * 5/9
// const cTok = (val) => val + 273.15
// const cTof = (val) => (val * 9/5) + 32
// const kToc = (val) => val-273.15
// const kTof = (val) => (val - 273.15) * 9/5 + 32

// const calculateTemp = (temp)=>{
//     let myTempType = temp[temp.length-1]
//     if(!tempTypes.includes(myTempType))
//         return "invalid temp type"
//     let myTempVal = Number(temp.slice(0, temp.length-1))
//     let result = ""
//     switch(myTempType){
//         case "K":
//             result+= `In K  myTempVal = ${myTempVal} 
// In C my tempVal = ${kToc(myTempVal)}
// In F my tempVal = ${kToF(myTempVal)}`
//             break;
//         case "C":
//             result+= `In C  myTempVal = ${myTempVal} 
// In K my tempVal = ${cTok(myTempVal)}
// In F my tempVal = ${cTof(myTempVal)}`
            
//             break;
//         case "F":
//             result+= `In F  myTempVal = ${myTempVal} 
// In C my tempVal = ${fToc(myTempVal)}
// In K my tempVal = ${fTok(myTempVal)}`            
//             break;
//     }
//     return result
// }
// let temp = getDataFromUser("enter temp in 32C format").toUpperCase()
// alert(calculateTemp(temp))

// let user = {
//     name: "marwa",
//     age:36,
//     getData : function(){
//         console.log(`name is : ${this.name} and age is: ${this.age}`)
//         // console.log(this);
//     }
// }

// user.getData()


// const d = (user) => {

// }

// const tempTypes = ["K", "C", "F"]
// const fTok = (val) => (val - 32 ) * 5/9 + 273.15
// const fToc = (val) => (val - 32) * 5/9
// const  getDataFromUser= (msg) => prompt(msg)
// let fConverter = (val) =>{
//     return {
//         f: val,
//         k:fTok(val),
//         c: fToc(val),
//         printResult: function(){
//             return(`f: ${this.f} - K: ${this.k} - c: ${this.c}`)
//         }
//     }
// }
// const calculateTemp = (temp)=>{
//     let myTempType = temp[temp.length-1]
//     if(!tempTypes.includes(myTempType))
//         return "invalid temp type"
//     let myTempVal = Number(temp.slice(0, temp.length-1))
//     let result = ""
//     switch(myTempType){
//         case "F":
//             result = fConverter(myTempVal).printResult(); 
//             break;
//     }
//     return result
// }
// let temp = getDataFromUser("enter temp in 32C format").toUpperCase()
// alert(calculateTemp(temp))
// variables scope let var const, loop infinite , switch, function, object

// let data = { x:5, y:6 }
// let z=50

// function test(obj, m){
//     //obj={x:5, y:6}
//     obj.x = 100 // {x:100, y:6}
//     m = 100
// }

// test(data, z)

// console.log(data) // x:100, y:6
// console.log(z); //50

// forEach filter find findIndex sort

let data = [
    {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    },
    {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
    },
    {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
    },
    {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
    },
    {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi"
    },
    {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio"
    },
    {
    userId: 2,
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
    userId: 2,
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum"
    },
    {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae"
    }
    ]
// data.sort()
// data.forEach( (d, i) => {
//     console.log(` ${i+1} -> ${d.title}`)
// } )

//filter [] multiple data
// let myFiltered = data.filter(d =>{
//     return d.id>50
// })
// console.log(myFiltered);
//find {} element 
// let myFind = data.find(d =>{
//     return d.id>50
// })
// console.log(myFind);

//findIndex index or -1
// let myFindIndex = data.findIndex(d =>{
//     return d.id>50
// })
// console.log(myFindIndex);

// let serKey = prompt("enter your search key").toLowerCase()
// //lowercase includes
// let result = data.filter( d => d.title.toLowerCase().includes(serKey) )
// console.log(result)


user={name:"marwa"}

user.name
user["name"]












