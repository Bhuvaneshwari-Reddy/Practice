
//promise
/*
let prom = new Promise((resolve, reject)=>{

    setTimeout(() => {
       resolve("The promise is resolved") 
    }, 2000);

}).then((value)=>{
    console.log(value)
})

let prom1 = new Promise((resolve, reject)=>{

    setTimeout(() => {
       reject("The promise is not resolved") 
    }, 3000);

}).catch((value)=>{
    console.log(value)
}) 


//callbacks

function weekdays(callbacks){
console.log("There are 7 days in an week")
callbacks();
}

function Sunday(){
console.log("Sunday")
}

function Monday(){
console.log("Monday")
}

function Tuesday(){
console.log("Tuesday")
}


weekdays(Sunday())

*/


//async function

async function weather(){

let mumbaiWeather = new Promise((resolve, reject)=>{
// setTimeout(() => {
//         resolve("The Temperature of Mumbai is 24degrees")  
//     }, 2000);
    resolve("The Temperature of Mumbai is 24degrees")

})

let DelhiWeather = new Promise((resolve, reject)=>{

    //
    // setTimeout(() => {
    //     resolve("The Temperature of Delhi is 25degrees")  
    // }, 5000);
    resolve("The Temperature of Delhi is 25degrees")  

})

let BangaloreWeather = new Promise((resolve, reject)=>{
    // setTimeout(() => {
    //     resolve("The Temperature of Bangalore is 27degrees")  
    // }, 7000);
    resolve("The Temperature of Bangalore is 27degrees")  
}


)
let bw=await BangaloreWeather
let mw=await mumbaiWeather
let dw=await DelhiWeather
console.log(bw)
console.log(mw)
console.log(dw)


}
weather()



let bhuvan = "ndsvfhjsd";

console.log(`${bhuvan} njhgkljg`)