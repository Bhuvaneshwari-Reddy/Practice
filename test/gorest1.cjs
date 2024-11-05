const chai = require('chai')
const chaiHttp = require('chai-http')
const expect=chai.expect;
chai.use(chaiHttp);


describe("GoRest Test cases",()=>{
    const url="https://gorest.co.in/"

    it("Create user",(done)=>{
        const a={
            "name":"Tenali1213", 
            "gender":"male", 
            "email":"tenali123.ramakrishna@040.com",
             "status":"active"
    
        }

        chai
        .request(url)
        .post("public/v2/users")
        .set("Authorization" , "Bearer 91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
        .send(a)
        .end((err, res)=>{
            expect(res).to.have.status(201)
            expect(res.body).to.have.property("id")
            this.responseId=res.body.id
            done()
            console.log(res.body)
            console.log(this.responseId)
        })
        })

        it("Get the users", (done)=>{
            chai
            .request(url)
            .get(`public/v2/users/${this.responseId}`)
            .set("Authorization" , "Bearer 91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")

            .end((err, res)=>{
                expect(res).to.have.status(200)
                done()
           })

        })

        it("Update the users", (done)=>{
            chai
            .request(url)
            .get(`public/v2/users/${this.responseId}`)
            .set("Authorization" , "Bearer 91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
            .send({
                "name":"Tenali3", 
                "gender":"male", 
                "email":"tenali3.ramakrishna@40.com",
                "status":"active"
                })
            .end((err, res)=>{
                expect(res).to.have.status(200)
                done()
           })
        })

        it("delete the user", (done)=>{
        chai
            .request(url)
            .delete(`/public/v2/users/${this.responseId}`)
            .set("Authorization" , "Bearer 91dab3929b068db1b014278b40feac0b524d7b054a046c3f7915a1c4ab684401")
            .end((err, res)=>{
              expect(res).to.have.status(204)      
              done()
            })


            
        })

      



    })
