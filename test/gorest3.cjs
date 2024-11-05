const chai = require('chai')
const chaihttp = require('chai-http')
const expect=chai.expect
chai.use(chaihttp)


before(()=>{
console.log("Test cases for GoRest API to be executed")

})
after(()=>{

    console.log("All the Test cases are executed")
})
beforeEach(()=>{
    a="John"+Math.floor(Math.random()*1000+10)
    console.log("Waiting for the next test case")
    })


afterEach(()=>{
    console.log("Test case has been passed successfully")

})

// const randomname="John"+Math.floor(Math.random()*1000+10)
const randomemail="John"+Math.floor(Math.random()*1000+10)+"@gmail.com"
const auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}
const baseurl="https://gorest.co.in/"
const endpoint="public/v2/users"


describe("Test cases for Gorest API",()=>{


it("Create User",(done)=>{
 chai
    .request(baseurl)
    .post(endpoint)
    .send({
        "name":a, 
        "gender":"male", 
        "email":randomemail,
        "status":"active"
        })
    .set(auth)
    .end((err,res)=>{
        expect(res.body).to.be.an("object"),
        expect(res).to.have.status(201),
        expect(res.body).to.include.property("id"),
        expect(res.body).to.include.property("name"),
        expect(res.body).to.include.property("gender"),
        expect(res.body).to.include.property("email"),
        expect(res.body).to.include.property("status")
        randomid=res.body.id
        //console.log(this.randomid)
        done();
    })
})
it("Get the user",(done)=>{
 chai
    .request(baseurl)
    .get(`public/v2/users/${randomid}`)
    .set(auth)
    .end((err,res)=>{
     expect(res).to.have.status(200)
     done();

    })
})
it("Update the user",(done)=>{
chai
     .request(baseurl)
     .put(`public/v2/users/${randomid}`)
     .send({
        "name":this.a, 
        "gender":"Female", 
        "email":randomemail,
        "status":"Inactive"

     })
     .set(auth)
     .end((err,res)=>{
      expect(res).to.have.status(200)
      expect(res.body).to.include.property("id")
        expect(res.body).to.include.property("name")
        expect(res.body).to.include.property("gender")
        expect(res.body).to.include.property("email")
        expect(res.body).to.include.property("status")
        console.log(res.body)
        this.randomid=res.body.id
        console.log(this.randomid)
        done();
     })
 })
it("Delete the user",(done)=>{
 chai
      .request(baseurl)
      .delete(`public/v2/users/${randomid}`)
      .set(auth)
      .end((err,res)=>{
        expect(res).to.have.status(204)
        done();
      })
    })

})