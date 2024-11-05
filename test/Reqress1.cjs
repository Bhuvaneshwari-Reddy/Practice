const chai=require("chai")
const chaihttp=require("chai-http")
var expect=chai.expect
chai.use(chaihttp)
let baseurl="https://reqres.in/"
// const{url,requestBody}=require('./helpersreqress.cjs')

describe("Reqress Test cases",()=>{
it("Create User",(done)=>{
 chai
    .request(baseurl)
    .post("api/users")
    .send({
        "name": "Bhuvi",
        "job": "SDET"
    })
    .end((err,res)=>{
     expect(res).to.have.status(201);
     expect(res.body).to.be.an("Object");
     expect(res.body).to.have.property("name");
     expect(res.body).to.have.property("job");
     expect(res.body).to.have.property("id");
     expect(res.body).to.have.property("createdAt");
     randomID=res.body.id;
     console.log(res.body);
     console.log(res.body.id);
     done()
    })
})
it("Get the user",(done)=>{
chai
    .request(baseurl)
    .get(`api/users?page=${randomID}`)
    .end((err,res)=>{
     expect(res).to.have.status(200)
     done()
    })
})
it("Update the User",(done)=>{
chai
    .request(baseurl)
    .put(`api/users/${randomID}`)
    .send({
        "name": "Bhuvana Reddy",
        "job": "QA Analyst"
    })
    .end((err,res)=>{
     expect(res).to.include.status(200)
     expect(res.body).to.be.an("Object")
     done()
    })
})
it("Delete the User",(done)=>{
chai
    .request(baseurl)
    .delete(`api/users/${randomID}`)
    .end((err,res)=>{
     expect(res).to.have.status(204)
     done()
     })
})
})
