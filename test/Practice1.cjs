
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

describe("Access endpoint", function() {
  it("Should return NoOfusers", (done)=> {
    chai
      .request("url")
      .set("auth")
      .get("/api/users")
      .end((err, res)=>{
        expect(res).to.have.status(200)
        expect(res.body).to.have.property("Count")
        NoOfusers=res.body.userCount;
        done();
      })
  })

  })

