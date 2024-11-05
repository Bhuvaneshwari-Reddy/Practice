const chai=require("chai")
const chaihttp=require("chai-http")
const expect=chai.expect
chai.use(chaihttp)
const {baseurl,requestbody}=require ("./Petstorehelp.cjs")

describe("Petstore API",()=>{
it("Create the user in Petstore",(done)=>{
chai
    .request(baseurl)
    .post("/user")
    .send(requestbody)
    .end((err,res)=>{
     expect(res).to.have.status(200)
     console.log(res.body)
     done()

    })
})
it("Get the user in Petstore",(done)=>{
chai
    .request(baseurl)
    .get("/user/charles")  
    .end((err,res)=>{
    expect(res).to.have.status(200)
    done()
    })
})
it("Update the user in Petstore",(done)=>{
chai
   .request(baseurl)
   .put("/user/charles")
   .send({

    "id": 1,
    "username": "charles",
    "password": "charles@4321",
    "phone": "6352414758",
    "userStatus": 1
   })
   .end((err,res)=>{
   expect(res).to.have.status(200)
   done()
 })
})
it("Delete the user in Petstore",(done)=>{
chai
    .request(baseurl)
    .delete("/user/charles")
    .end((err,res)=>{
      expect(res).to.have.status(200)
      done()
   })
})
})