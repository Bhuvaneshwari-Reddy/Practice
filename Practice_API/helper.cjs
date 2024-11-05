
//  function url(){
//    a="https://gorest.co.in/"
//    return a;
// }


const url = "https://gorest.co.in/"
const endpoint = "public/v2/users" 
const Authorize ={
   "Authorization": "Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40" 
}

const randomname = "Tenali"+parseInt(Math.random()*9999999)+100000
const randomEmail = "tenalirama"+parseInt(Math.random()*999)+1+"@gmail.com"


const body = {
    "name":randomname, 
    "gender":"male", 
    "email":randomEmail,
     "status":"active"
}


const updateBody = {
    "name":"Hello"+randomname, 
    "gender":"male", 
    "email":"Hello"+randomEmail,
     "status":"active"
}



module.exports={url, endpoint, Authorize, body, updateBody}
