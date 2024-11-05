const chai= require('chai') 
const chaiHttp = require('chai-http')
const expect = chai.expect
chai.use(chaiHttp)


const url ="https://gorest.co.in/"
describe("Go Rest API Practice", ()=>{
    const a={

        "name":"Tenali9", 
        "gender":"male", 
        "email":"tenali9.ramakrishna@456789.com",
         "status":"active"
    } 
    it("Create user", (done)=>{
        
       chai
       .request(url) 
       .post("public/v2/users")
       .set("Authorization", "Bearer " +"91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
       .send(a)
      .end((err, res)=>{
        expect(res).to.have.status(201)
        expect(res.body).to.have.property("id")
        this.restid = res.body.id
         console.log(this.restid)
        done()
       
    

    })
})

it("Get user",(done)=>{
   
    chai
    .request(url)
    .get(`public/v2/users/${this.restid}`)
    .set("Authorization", "Bearer " +"91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
    .end((err,res)=>{
        expect(res).to.have.status(200)
        
        done();
        // console.log(res.body)
    })
})
    it("Update user", (done)=>{

        chai
        .request(url)
        .put(`public/v2/users/${this.restid}`)
        .set("Authorization", "Bearer " +"91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
        .send({

            "name":"Bhuvana ", 
            "gender":"Female", 
            "email":"bhuvana@gmail.com",
             "status":"active"
            })
            .end((err,res)=>{
                expect(res).to.have.status(200)
                done();
            })
    })
    it("Delete user",(done)=>{
        chai
        .request(url)
        .delete(`public/v2/users/${this.restid}`)
        .set("Authorization", "Bearer " +"91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
        .end((err,res)=>{
            expect(res).to.have.status(204)
            done();
        })
    })

})


