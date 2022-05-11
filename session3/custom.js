// const ApiURL = "https://jsonplaceholder.typicode.com/posts?_limit=10"
// // fetch(ApiURL).then((data)=>{
// //      console.log(data)

// //     }).then()

// const getApiData = async(api, cb) =>{
//     try{
//         // const baseData = await fetch(ApiURL)
//         // const finalData = await baseData.json()
//         const finalData = await (await fetch(api)).json()
//         // return finalData
//        cb(finalData, false)
//     }
//     catch(e){
//         // console.log(e.message)
//         cb(false, e.message)
//     }
// }

// // console.log(getApiData())
// getApiData(ApiURL, (result, error)=> {
//     if(result) {
//         console.log("success")
//         console.log(result)
//     }
//     else{
//         console.log("fee error")
//         console.log(error)
//     }
// })
const mainURL = "https://jsonplaceholder.typicode.com/"
const apis = [
    {urlKeyWord: "posts", showKeyWord:"Posts Data", classes:"btn btn-danger mx-3"},
    {urlKeyWord: "users", showKeyWord:"Users Data", classes:"btn btn-warning mx-3"},
    {urlKeyWord: "photos", showKeyWord:"Photos Data", classes:"btn btn-success mx-3"},
    {urlKeyWord: "todos", showKeyWord:"ToDos Data", classes:"btn btn-dark mx-3"}
]
const Buttons = document.querySelector("#Buttons")
const data = document.querySelector("#data")

apis.forEach(api=>{
    btn = document.createElement("button")
    btn.innerText= api.showKeyWord
    btn.classList = api.classes
    Buttons.appendChild(btn)
    btn.addEventListener("click", async() => {
        let myResult = await (await fetch(`${mainURL}${api.urlKeyWord}`)).json()
        console.log(myResult)
    })
})


// handleAPi= async(urlKeyWord)=>{
//     let myResult = await (await fetch(`${mainURL}${urlKeyWord}`)).json()
//     console.log(myResult)
// }