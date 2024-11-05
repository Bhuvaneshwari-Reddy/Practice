const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const { baseurl, requestbody } = require("../test/Petstorehelp.cjs"); // Adjust as needed
const { json } = require("express/lib/response");

describe("API with Nested JSON Data", () => {
  it("should return a list of users with correct nested properties", (done) => {
    chai
      .request("https://dummyjson.com")
      .get("/users")
      .end((err, res) => {
        if (err) return done(err);
        console.log(JSON.stringify(res.body));
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("users").that.is.an("array");

        let cities = [];
        let companies = [];
        res.body.users.forEach((user) => {
          expect(user).to.have.property("address").that.is.an("object");
          expect(user).to.have.property("company").that.is.an("object");
          expect(user).to.have.property("age").that.is.a("number");
          expect(user.address).to.have.property("city").that.is.a("string");
          expect(user.company).to.have.property("name").that.is.an("string");
          cities.push(user.address.city);
          companies.push(user.company.name);
        });
        const uniqueCities = new Set(cities);
        const uniqueCompanies = new Set(companies);
        console.log("Unique Cities:", [...uniqueCities]);
        console.log("Unique companies:", [...uniqueCompanies]);
        console.log(`Number of users: ${res.body.users.length}`);
        done();
      });
  });
});
