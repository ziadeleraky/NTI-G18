// let div = document.querySelector('div') // #id .class
// console.log(div);
// div.textContent="hello from dom"
// div.remove()

// let p = document.createElement("p")
// p.textContent="new paragraph"
// div.appendChild(p)
const data =[
    {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
    },
    {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://via.placeholder.com/600/1ee8a4",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
    },
    {
    albumId: 1,
    id: 12,
    title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://via.placeholder.com/600/66b7d2",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
    },
    {
    albumId: 1,
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    url: "https://via.placeholder.com/600/197d29",
    thumbnailUrl: "https://via.placeholder.com/150/197d29"
    },
    {
    albumId: 1,
    id: 14,
    title: "est necessitatibus architecto ut laborum",
    url: "https://via.placeholder.com/600/61a65",
    thumbnailUrl: "https://via.placeholder.com/150/61a65"
    },
    {
    albumId: 1,
    id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    url: "https://via.placeholder.com/600/f9cee5",
    thumbnailUrl: "https://via.placeholder.com/150/f9cee5"
    }
    ]
// [ {attrName:"src", attrVal:ele.val} ]
const createMyOwnElements = (parent, element, classes, txt, attributes=[]) =>{
    let myEle = document.createElement(element)
    if(classes) myEle.classList=classes
    parent.appendChild(myEle)
    myEle.innerText = txt
    attributes.forEach(attr => myEle[attr.attrName]= attr.attrVal)
     //myEle.setAttribute(attrName, attrinuteVal)
    return myEle
}
const dataWrap = document.querySelector("#dataWrap")
data.forEach(element=>{
    let masterDiv = createMyOwnElements(dataWrap, "div", "col-12 col-md-4", null)
    let innerDiv = createMyOwnElements(masterDiv, "div", "m-2 border border-3 border-danger", null)
    createMyOwnElements(innerDiv, "img", "img-fluid", null, 
    [ {attrName:"src", attrVal:element.url} , {attrName:"id", attrVal:"myId"}])
    createMyOwnElements(innerDiv, "h6", null,element.title)
    // let masterDiv = document.createElement('div')
    // masterDiv.classList = "col-md-4 col-12"
    // dataWrap.appendChild(masterDiv)
    // let innerDiv = document.createElement("div")
    // innerDiv.classList=Z"m-2 border border-3 border-danger"
    // masterDiv.appendChild(innerDiv)
    // let myImg = document.createElement("img")
    // myImg.classList="img-fluid"
    // innerDiv.appendChild(myImg)

    // let h3 = document.createElement("h6")
    // h3.innerText = element.title
    // innerDiv.appendChild(h3)
})