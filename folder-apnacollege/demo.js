// //data types
// let age=10;//number
// let name="Its me";//string
// itsahuman=true;//boolean
// let b;//undefined
// let c=null//null ,type=object
// let num=BigInt("45154546")//bigint
// let sym=Symbol("jhdbsfdw")//symbol

// const { use } = require("chai");



// //loops

// let human={
// name:"Bhuvi",
// age:20,
// place:"Bng",
// }
// for(let key in human){
//     console.log(key,human[key])
// }

//strings

// let str="Bhuvi"
// console.log(str.length)
// console.log(str[2])

// console.log(`The name of the user is ${str}`)
// console.log("first line \n second line")
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(2,4))
// console.log(str.replace("u","v"))


// //arrays
// let username=["bhuvi","reddy","bhunu","bhuvana"]
// for(i=0;i<username.length;i++){
//     console.log(username[i])
// }


// username.push("its me")
// console.log(username)
// username.pop()
// console.log(username)

// username.unshift("its not me")
// console.log(username)
// username.shift()
// console.log(username)
// username.splice(2,1,"b")
// console.log(username)
// username.splice(1,0,"bb")
// console.log(username)

// //functions
//  function myname(){
//     let x=10;
//     let y=20;
//    console.log(x+y) ;
//  }
//  myname()



//  function myvowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//     {
//         count++;
//     }
//  }
//  console.log(count)
// }
//  myvowels("Bhuvana")



//  let array=[1,2,3,4,5]
// //  array.forEach(function myfn(val){
// // console.log(val)
// //  })

// array.forEach((val)=>{
//  console.log(val)   
// })


// //map

// let num=[10,20,30]
// let newarr=num.map((val)=>{

//    return val*val;
// })
// console.log(newarr)


// //filter

// let arr=num.filter((val)=>{

//     return val%2===0;
// })
// console.log(arr)

// //reduce

// let arr1=num.reduce((res,cur)=>{
//      return res+cur;
// })
// console.log(arr1)

// let n=10
//  let a=[1,2,.3,4,5];
//  for(let i=1;i<=n;i++){

//     a[i-1]=i;
//  }

//  console.log(a)

//  // console.dir(window.document)



// //classes and objects
// const details={
//     fullname:"Bhuvana",
//     Age:25,
//     marks:90,
//     printmarks:function(){
//     console.log(this.marks)
    
//     }
    
//     }
//     details.printmarks()

//     class Myclass{
//       info(){
//     console.log("this is me")
//       }
     
//    info1(){
//       console.log("this is not me")
//       }

//     }
//     let information=new Myclass()
//     information.info()
//     information.info1()
// console.log("start")
//     setTimeout(() => {
//       console.log("Middle")
//     }, 2000);
//     console.log("end")


      
    //callbacks
function sum(a,b){

  console.log(a+b)
}
function calci(a,b,sum1  ){
  sum1(a,b)
}
calci(1,2,sum)

//classes and objects
const details={
  fullname:"Bhuvana",
  Age:25,
  marks:90,
  printmarks:function(){
  console.log(this.marks)
  
  }
  
  }
  details.printmarks()
  
  

//classes and inheritance

class person{
eat(){
  console.log("eat")
}
sleep(){

  console.log("sleep")
}

}

class engineer extends person{
work(){
  console.log("work")
}

}

let engobj=new engineer();
console.log(engobj)


//
let data="information"
class user {
constructor(name,email){
this.name=name;
this.email=email;
}
viewdata(){
  console.log("data",data)
}
}

class admin extends user{
  constructor(name,email){
  super(name,email)
  }
  editdata(){
    data="some data"
  }
}
let std1=new user("Bhuvana","bhuvana@654")
let std2=new user("Reddy","reddy@123")
let admindata=new admin("xyz","xyz@gmail.com")
// console.log(std1)
// console.log(std2)


//error handling

let a=10;
let b=20;
console.log(a+b)
console.log(a+b)
try {
  console.log(a+c)
} catch (error) {
  console.log(error)
}
console.log(a+b)

//fetch api  
const url="https://reqres.in/";


const facts=async()=>{
  let response=await fetch(url)
  console.log(response)
}
 