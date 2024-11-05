const chai=require("chai")
const chaihttp=require("chai-http")
const expect=chai.expect
chai.use(chaihttp)

describe("Gorest Api",()=>{
const baseurl="https://gorest.co.in/"
const ranName="Tenali"+parseInt(Math.random()*1000)
const ranEmail="tenali"+parseInt(Math.random()*1000)+"@gmail.com"
const auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}
const ranbody=({
    "name":ranName, 
        "gender":"male", 
        "email":ranEmail,
        "status":"active"
})
it("Create a user",(done)=>{
chai 
    .request(baseurl)
    .post("public/v2/users")
    .set(auth)
    .send(ranbody)
    .end((err,res)=>{

        expect(res).to.have.status(201)
        done()
        ranid=res.body.id
    })
})
it("Get the user",(done)=>{

chai
    .request(baseurl)
    .get(`public/v2/users/${ranid}`)
    .set(auth)
    .end((err,res)=>{
     expect(res).to.have.status(200)
     done()
    })
})

it("Update the user",(done)=>{
chai
   .request(baseurl)
   .put(`public/v2/users/${ranid}`)
   .set(auth)
   .send({"name":ranName, 
   "gender":"male", 
   "email":ranEmail,
   "status":"Inactive"})
    .end((err,res)=>{
     expect(res).to.have.status(200)
     expect(res.body).to.have.property("status")
     expect(res.body).to.have.property("name")
     expect(res.body).to.have.property("id")
     expect(res.body).to.have.property("email")
     expect(res.body).to.have.property("gender")
     done()
    })
})
it("Delete the user",(done)=>{
chai
    .request(baseurl)
    .delete(`public/v2/users/${ranid}`)
    .set(auth)
    .end((err,res)=>{
     expect(res).to.have.status(204)
     done()
    })


})

})