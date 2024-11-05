const chai = require('chai')
const chaiHttp = require('chai-http')
var expect = chai.expect
chai.use(chaiHttp)



const a= "https://petstore.swagger.io/v2"
describe("Pet Store API Testing", ()=>{

it("Create a pet", (done)=>{
chai.request(a)
.post("/user")
.send({
        
        "id": 1,
        "username": "VNS",
        "firstName": "Damru",
        "lastName": "Damru",
        "email": "Damru@gmail.com",
        "password": "Damru@123",
        "phone": "9876543210",
        "userStatus": 1
})
.end((err, res)=>{
//expect(res).to.have.status(200)

done()

})  
}

)  

it("Get the API", (done)=>{
chai.request(a)
.get("/user/VNS")
.end((err,res)=>{
    //expect(res).to.have.status(200)
    expect(res.body).to.have.property("id")
    expect(res.body).to.have.property("username")
    expect(res.body).to.have.property("firstName")
    expect(res.body).to.have.property("lastName")
    expect(res.body).to.have.property("email")
    expect(res.body).to.have.property("password")
    expect(res.body).to.have.property("phone")
    expect(res.body).to.have.property("userStatus")
    
    done()


})

})


it("Update the pet", (done)=>{
chai.request(a)
.put("/user/VNS")
.send({
    "id": 1,
    "username": "VNS",
    "firstName": "Dholu",
    "lastName": "Damru",
    "email": "Dholu@gmail.com",
    "password": "Dholu@123",
    "phone": "9876543210",
    "userStatus": 1
})
.end((err, res)=>{
    expect(res).to.have.status(200)
})
done()
})


it("delete the pet", (done)=>{
chai.request(a)
.delete("/user/VNS")
.end((err, res)=>{
//expect(res).to.have.status(201)
})
done()
})









})