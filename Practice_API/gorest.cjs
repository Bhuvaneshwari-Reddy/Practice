const chai = require('chai')
const chaihttp = require('chai-http') 
const expect =  chai.expect
chai.use(chaihttp)
const {url, endpoint, Authorize, body, updateBody}=require("./helper.cjs")

// const baseurl=url()
// console.log(baseurl)

describe("Test cases on Go rest", ()=>{

it("Test cases on Create Users", (done)=>{
chai
    .request(url)
    .post(endpoint)
    .set(Authorize)
    .send(body)
    .end((err, res)=>{
    expect(res).to.have.status(201)    
    console.log(res.body)
    randomId= res.body.id
    done()
    })
})

it("Testcases for Get Usere", (done)=>{
chai
    .request(url)
    .get(`public/v2/users/${randomId}`)
    .set(Authorize)
    .end((err, res)=>{
     expect(res).to.have.status(200)     
     done()
})
})


it("Testcases for Update Users", (done)=>{
chai
    .request(url)
    .put(`public/v2/users/${randomId}`)
    .set(Authorize)
    .send(updateBody)
    .end((err, res)=>{
    expect(res).to.have.status(200)    
    done()
})
})

it("Testcases on delete users", (done)=>{
chai
    .request(url)
    .delete(`public/v2/users/${randomId}`)
    .set(Authorize)
    .end((err, res)=>{
     expect(res).to.have.status(204)
     done()

    })

})

})
