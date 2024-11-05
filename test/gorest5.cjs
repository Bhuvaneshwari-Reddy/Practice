const chai=require("chai");
const chaihttp=require("chai-http");
const expect=chai.expect;
chai.use(chaihttp)

before(()=>{
    console.log("Gorest API Test cases")
    })

 after(()=>{
    console.log("All the test cases are executed")
    })
beforeEach(()=>{
     rname="Bhuvana"+(parseInt(Math.random()*1000))
     randomemail="Bhuvana"+(Math.floor(Math.random()*1000))+"@gmail.com"
     auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}
    })

afterEach(()=>{
    console.log("End of the it block")
    })
    const baseurl="https://gorest.co.in/"

describe("Api Test cases for goRest",()=>{
   
    it("create the user",(done)=>{
    chai 
        .request(baseurl)
        .post("public/v2/users")
        .set(auth)
        .send(
            {"name":rname,
             "gender":"male", 
             "email":randomemail, 
             "status":"active"})
         .end((err,res)=>{
          expect(res).to.have.status(201)
          console.log(res.body)
           done()
           randomid=res.body.id

         })
    })

    it("Get the user",(done)=>{
     chai
         .request(baseurl)
         .get(`public/v2/users/${randomid}`)
         .set(auth)
         .end((err,res)=>{
          expect(res).to.have.status(200)
          done()
         })
    })
    it("Update the user",(done)=>{
    chai
        .request(baseurl)
        .put(`public/v2/users/${randomid}`)
        .set(auth)
        .send({"name":rname,
        "gender":"male", 
        "email":randomemail, 
        "status":"Inactive"
      })
      .end((err,res)=>{
       expect(res).to.have.status(200)
       done()

      })
    })
it("Delete the user",(done)=>{
  chai 
      .request(baseurl)
      .delete(`public/v2/users/${randomid}`)
      .set(auth)
      .end((err,res)=>{
       expect(res).to.have.status(204)
       done()
      })
})

})
