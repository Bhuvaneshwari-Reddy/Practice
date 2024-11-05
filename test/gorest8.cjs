
const chai=require("chai");
const chaihttp=require("chai-http");
const { auth } = require("../helpers/helper.cjs");
const expect=chai.expect;
chai.use(chaihttp)

// before(()=>{
//     console.log("GoRest api test cases")
// })
// after(()=>{
//     console.log("All the test cases executed")
// })
// beforeEach(()=>{
// randomname="Bhuvi"+(Math.floor(Math.random()*1000))
// randommail="bhuvi"+(Math.floor(Math.random()*10000))+"@gmail.com"
// auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}

// })
// afterEach(()=>{
//     console.log("End of the test case")
// })
// const baseurl="https://gorest.co.in/"
// const endpoint="public/v2/users"
// const endpoint1="public/v2/users/"
describe.skip("GoRest APIs",()=>{
// const requestbody= {
//  "name":randomname,
//  "gender":"male", 
//  "email":randommail, 
//  "status":"active"}

// const updatebody={
// "name":randomname,
// "gender":"male", 
// "email":randommail, 
// "status":"inactive"}

    it("Create user",(done)=>{
       chai
          .request(baseurl)
          .post (endpoint)
          .send({
            "name":randomname,
            "gender":"male", 
            "email":randommail, 
            "status":"active"})
          .set(auth)
          .end((error,response)=>{
            expect(response).to.have.status(201);
            expect(response.body).to.have.property("name");
            expect(response.body).to.have.property("email");
            expect(response.body).to.have.property("gender");
            expect(response.body).to.have.property("status");;
            expect(response.body).to.have.property("id");
            randomId=response.body.id;
            done();
          })
    })
    it("Get the user",(done)=>{
     chai
         .request(baseurl)
         .get(endpoint1+randomId)
         .set(auth)
         .end((error,response)=>{
            expect(response).to.have.status(200)
            done()
         })
    })

    it("Update the user",(done)=>{
      chai
          .request(baseurl)
          .put(endpoint1+randomId)
          .set(auth)
          .send({
            "name":randomname,
            "gender":"male", 
            "email":randommail, 
            "status":"inactive"})
          .end((error,response)=>{
            expect(response).to.have.status(200);
            done();

          })
    })
    it("Delete the user",(done)=>{
      chai
          .request(baseurl)
          .delete(endpoint1+randomId)
          .set(auth)
          .end((error,response)=>{
            expect(response).to.have.status(204);
            done();
          })
    })
})
describe.skip("API for Gorest",()=>{
const baseurl="https://gorest.co.in/"
const endpoint="public/v2/users"
const endpoint1="public/v2/users/"
randomname="Bhuvi"+(Math.floor(Math.random()*1000))
randommail="bhuvi"+(Math.floor(Math.random()*10000))+"@gmail.com"
const auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}
const requestbody= {
 "name":randomname,
 "gender":"male", 
 "email":randommail, 
 "status":"active"}

const updatebody={
"name":randomname,
"gender":"male", 
"email":randommail, 
"status":"inactive"}
it("Create user",(done)=>{
    chai
       .request(baseurl)
       .post(endpoint)
       .set(auth)
       .send(requestbody)
       .end((err,res)=>{
        expect(res).to.have.status(201);
        randomId=res.body.id;
        done();
       })
})
it("Get the User",(done)=>{
    chai
        .request(baseurl)
        .get(endpoint1+randomId)
        .set(auth)
        .end((err,res)=>{
            expect(res).to.have.status(200);
            done();
        })
})
it("Update the User",(done)=>{
    chai
       .request(baseurl)
       .patch(endpoint1+randomId)
       .set(auth)
       .end((err,res)=>{
        expect(res).to.have.status(200);
        done();
    })
})
it("Delete the User",(done)=>{
    chai
        .request(baseurl)
        .delete(endpoint1+randomId)
        .set(auth)
        .end((err,res)=>{
            expect(res).to.have.status(204);
            done();
        })
})

})
describe("Public api",()=>{
const baseurl="https://gorest.co.in/"
const endpoint="public/v2/users"
const endpoint1="public/v2/users/"
randomname="Reddy"+(Math.floor(Math.random()*10000));
randommail="bhuvana"+(Math.floor(Math.random()*1000))+"@gmail.com"
const auth={"Authorization":"Bearer 758ffa1bf562b8d603365c837327088db2806a0109e6e77b9397a62c64952b40"}
const requestbody= {
 "name":randomname,
 "gender":"male", 
 "email":randommail, 
 "status":"active"}

const updatebody={
"name":randomname,
"gender":"male", 
"email":randommail, 
"status":"inactive"}

it("Create a user",(done)=>{
    chai
        .request(baseurl)
        .post(endpoint)
        .send(requestbody)
        .set(auth)
        .end((err,res)=>{
         expect(res).to.have.status(201)
         expect(res.body).to.have.property("id")
         randomid=res.body.id;
         done()
        })
})
it("Get the user",(done)=>{
  chai
      .request(baseurl)
      .get(endpoint1+randomid)
      .set(auth)
      .end((err,res)=>{
        expect(res).to.have.status(200)
        done()
      })
})
it("Update the user",(done)=>{
  chai
      .request(baseurl)
      .patch(endpoint1+randomid)
      .set(auth)
      .send(updatebody)
      .end((err,res)=>{
        expect(res).to.have.status(200)
        done()
      })
})
it("Delete the user",(done)=>{
  chai
      .request(baseurl)
      .delete(endpoint1+randomid)
      .set(auth)
      .end((err,res)=>{
        expect(res).to.have.status(204)
        done()
      })
})
})
