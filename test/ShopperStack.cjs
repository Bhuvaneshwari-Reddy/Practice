const chai = require('chai')
const chaihttp = require('chai-http')
const expect = chai.expect
chai.use(chaihttp)


//Shopper Stack

const randomName = "Tenali"+Math.floor(Math.random()*10000+1)
const randomEmail = "Tenali"+Math.floor(Math.random()*999+1)+"@gmail.com"
const randomPhoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
const randomPassword = "Ten"+parseInt(Math.random()*9999+1)


describe("Shopper Stack API Testing", ()=>{

it.only("Create the User's Profile",  (done)=>{
    chai
        .request("https://www.shoppersstack.com/shopping")
        .post("/shoppers")
        .set("username", "admin",
             "password", "admin")
        .send({
            "city": "Bengaluru",
            "country": "India",
            "email": randomEmail,
            "firstName": randomName,
            "gender": "MALE",
            "lastName": "shah",
            "password": randomPassword,
            "phone": randomPhoneNumber,
            "state": "Karnataka",
           // "zoneId": "007"
        })
        .end((err, res) => {
            expect(res).to.have.status(201);
            // console.log(JSON.stringify(res.body));
         expect(res.body).to.have.property("data")
         expect(res.body.data).to.have.property("userId")
         this.id=res.body.data.userId
        console.log(this.id)
        console.log(res.body);
            done();
        });
    })
    it("Get the user",(done)=>{
     chai
        .request("https://www.shoppersstack.com/shopping")
        .get(`/shoppers/${this.id}`)
        .set({"username": "admin", 
              "password": "admin"})
        .end((err, res) => {
        expect(res).to.have.status(200)
                done()
            })

    })












} )

