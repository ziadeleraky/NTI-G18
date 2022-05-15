// http https http2
const https = require("https")
const apIURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"

// const req = https.request(apIURL, (res)=>{
//     let result = ""
//     res.on("data", (x)=> result+=x.toString())
//     res.on('end', ()=> console.log(JSON.parse(result)))
// })
// req.on("error", (err)=> console.log(err))
// req.end()

const apiReq = (url, cb)=>{
    const req = https.request(url, (res)=>{
        let result = ""
        res.on("data", (x)=> result+=x.toString())
        res.on('end', ()=> cb(JSON.parse(result), false))
    })
    req.on("error", (err)=> cb(false, err))
    req.end()
}

apiReq(apIURL, (res, err)=>{
    if(res) {
        console.log("api done")
        console.log(res)
    }
    else{
        console.log("there is an error")
        console.log(err);
    }
})