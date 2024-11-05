const chai=require('chai');
const chaihttp=require('chai-http');
const expect=chai.expect;
chai.use(chaihttp);
const {baseurl, endpoint, auth, requestbody, userCredentials}=require("../helpers/helper.cjs")
describe("Gorest API testing",()=>{

    it("Create a user in Gorest",(done)=>{
        chai 
           .request(baseurl)
           .post(endpoint)
           .set(auth)
           .send(requestbody)
           .end((err,res)=>{
            expect(res).to.have.status(201)
            
            expect(res.body).to.have.property("id")
            randomid=res.body.id
            console.log(randomid)
            done();
           })
    })
    it("Get the user",(done)=>{
        chai
            .request(baseurl)
            .get(endpoint+"/"+randomid)
            .set(auth)
            .end((err,res)=>{
                expect(res).to.have.status(200)
                done()
            })
    })
    it("Update the user status ",(done)=>{

        chai
           .request(baseurl)
           .put(endpoint+"/"+randomid)    
           .set(auth)            
           .send(userCredentials(requestbody).updatestatus)
           .end((err,res)=>{
            expect(res).to.have.status(200)
            console.log(res.body)
            done()
        })
    })


})