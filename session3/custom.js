//console.log("hello")
// function x(){
//     return function(){
//         return function(){
//             console.log("hello")
//         }    
//     }
// }
// x()()()

//clousers
const myClouser = (x) =>{
    //let x = 5
    return {
        x,
        upWord(){ x+=1; return x},
        backWord() { x-=1; return x},
        show(){return x}
    }
}
const a = myClouser(5) //{x:5, upWord:function, back(), show()}
console.log(a);
console.log(a.upWord()); // global x = 6  {x:5, upWord:function, back(), show()}
console.log(a.x); //x=5
console.log(a.show())
const b1 = myClouser(13)


let a1 = 3
const b = () => {
    b=a1
    b=7
}
b()
console.log(a1)
//callback

//promises

//then catch

//async await