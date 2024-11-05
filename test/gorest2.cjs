const chai = require('chai')
const chaihttp = require('chai-http');
// const { before } = require('mocha');
const expect = chai.expect
chai.use(chaihttp)


const randomName = "Tenali"+Math.floor(Math.random()*99999+1);
const randomemail = "tenalirama"+Math.floor(Math.random()*10000)+10000+"@gmail.com"


before(()=>{
    console.log("The Test cases are ready for execution")
})

beforeEach(()=>{
    // console.log("Wait for a while")
   a="Dolly"+(parseInt(Math.random()*10))
   
})


afterEach(()=>{
  
    console.log("Helloooooooooo")
    
})


after(()=>{
    console.log("All The Test cases are Passed")
})




describe("Gorest Part 2", ()=>{





it("Creating the resources", (done)=>{
chai.   
    request("https://gorest.co.in/")
    .post("public/v2/users")
    .set("Authorization", "Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40")
    .send({
        "name":a, 
        "gender":"male", 
        "email":randomemail,
        "status":"active"
        })

    .end((err, res)=>{
    expect(res).to.include.status(201)    
    console.log(res.body)
    expect(res.body).to.have.property("id")
    this.randomId=res.body.id
    console.log(this.randomId)
    console.log(res.body.id)
    done()
    })    
})




it("get the users", (done)=>{
    chai.
        request("https://gorest.co.in/")
        .get(`public/v2/users/${this.randomId}`)
       .set("Authorization", "Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40")
        .end((err, res)=>{
            expect(res).to.have.status(200)
            expect(res.body).to.include.property("id")
            expect(res.body).to.include.property("name")
            expect(res.body).to.include.property("email")
            expect(res.body).to.include.property("gender")

        done()    
    })

})

it("Update the users", (done)=>{
    chai.
        request("https://gorest.co.in/")
       .put(`/public/v2/users/${this.randomId}`) 
      .set("Authorization", "Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40")
       .send({
        "name":this.a, 
        "gender":"male", 
        "email":randomemail,
        "status":"inactive"
        })
       .end((err, res)=>{
        expect(res).to.have.status(200)
        expect(res.body).to.include.property("id")
        expect(res.body).to.include.property("name")
        expect(res.body).to.include.property("email")
        expect(res.body).to.include.property("gender")
        console.log(res.body)
        done()   

       }) 
})

it("delete the users",  (done)=>{
chai.
     request("https://gorest.co.in/")
    .delete(`public/v2/users/${this.randomId}`)
    .set("Authorization", "Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40")
    .end((err, res)=>{
        expect(res).to.have.status(204)   
   //     console.log(a)
        done()
    }) 


})




})














