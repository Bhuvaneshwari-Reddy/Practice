
const baseurl="https://petstore.swagger.io/v2"

// const randomuser="John"+Math.floor(Math.random()*100)
const randomfn="Michal"+Math.floor(Math.random()*100)
const randomln="chill"+Math.floor(Math.random()*100)
const randomemail="michal"+Math.floor(Math.random()*100)+"@gmail.com"
const requestbody=(
    {
        "id": 1,
        "username": "charles",
        "firstName": randomfn,
        "lastName": randomln,
        "email": randomemail,
        "password": "Michal@4321",
        "phone": "7894561234",
        "userStatus": 1
      }

)
  

module.exports={baseurl,requestbody}