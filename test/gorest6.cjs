const chai=require("chai");
const chaihttp=require("chai-http");
const expect=chai.expect
chai.use(chaihttp)
const{baseurl,auth,requestbody,updatebody}=require("../helpers/helper.cjs")

describe("Gorest practice",()=>{
it("Post a user in public API",(done)=>{
 chai
     .request(baseurl)
     .post("public/v2/users")
     .set(auth)
     .send(requestbody)
     .end((err,res)=>{
     expect(res).to.have.status(201)
     expect(res.body).to.have.property("id")
     console.log(res)
     randomid=res.body.id
     console.log(randomid)
    done()
     })
})
it("Get the user",(done)=>{
chai
    .request(baseurl)
    .get(`public/v2/users/${randomid}`)
    .set(auth)
    .end((err,res)=>{
        expect(res).to.have.status(200)
        expect(res.body).to.have.property("name")
        expect(res.body).to.have.property("email")
        console.log(res.body)
        done()
    })
})
it("Get the noofusers accessing endpoint",(done)=>{
    chai
        .request(baseurl)
        .get("public/v2/users")
        .set(auth)
        .end((err,res)=>{
            expect(res).to.have.status(200);
            // expect(res.body).to.be.an("array")
            // expect(res.body.length).to.be.above(0);
        console.log(res.body)
            console.log(`Number of users: ${res.body.length}`);
            done();
    })
})
    it.skip("Get the noofusers accessing",(done)=>{
        chai
            .request(baseurl)
            .get("public/v2/users")
            .set(auth)
            .end((err,res)=>{
                expect(res).to.have.status(200);
                // expect(res.body).to.be.an("array")
                users=res.body.length
                expect(res.body.length).to.be.equal(users+1)
                // console.log(`Number of users: ${res.body.length}`);
                console.log(users+1)
                done();
        })
    })

it("Update the user",(done)=>{
     chai
        .request(baseurl)
        .put(`public/v2/users/${randomid}`)
        .set(auth)
        .send(updatebody)
        .end((err,res)=>{
         expect(res).to.have.status(200)
         done()
        })
})
it("Delete an user",(done)=>{
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

