const ApiURL = "https://jsonplaceholder.typicode.com/posts?_limit=10"
// fetch(ApiURL).then((data)=>{
//      console.log(data)

//     }).then()

const getApiData = async(api, cb) =>{
    try{
        // const baseData = await fetch(ApiURL)
        // const finalData = await baseData.json()
        const finalData = await (await fetch(api)).json()
        // return finalData
       cb(finalData, false)
    }
    catch(e){
        // console.log(e.message)
        cb(false, e.message)
    }
}

// console.log(getApiData())
getApiData(ApiURL, (result, error)=> {
    if(result) {
        console.log("success")
        console.log(result)
    }
    else{
        console.log("fee error")
        console.log(error)
    }
})