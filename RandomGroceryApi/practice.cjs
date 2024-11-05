const chai = require("chai");
const chaihttp = require("chai-http");
const expect = chai.expect;
chai.use(chaihttp);
const { groceryCredentials } = require("../helpers/helperGrocery.cjs");
const {
  baseurl,
  authbody,
  updatecart,
  updateorderdata,
  cartdata,
  replacecartbody,
  createorderdata,
} = groceryCredentials();

describe("Grocery Store APIs", () => {
  context("Status", () => {
    it("Should successfully get the status", (done) => {
      chai
        .request(baseurl)
        .get("/status")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("status");
          done();
        });
    });
  });
  context("Product", () => {
    it("Should successfully get all the products", (done) => {
      chai
        .request(baseurl)
        .get("/products")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body[0]).to.have.property("id");
          expect(res.body[0]).to.have.property("category");
          expect(res.body[0]).to.have.property("name");
          expect(res.body[0]).to.have.property("inStock");
          prodId = res.body[0].id;
          done();
        });
    });

    it("Should successfully get single product", (done) => {
      chai
        .request(baseurl)
        .get("/products/" + prodId)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("id");
          expect(res.body).to.have.property("category");
          expect(res.body).to.have.property("name");
          expect(res.body).to.have.property("manufacturer");
          expect(res.body).to.have.property("price");
          expect(res.body).to.have.property("current-stock");
          expect(res.body).to.have.property("inStock");
          done();
        });
    });
  });
  context("Cart", () => {
    it("Should successfully create a cart", (done) => {
      chai
        .request(baseurl)
        .post("/carts")
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("created");
          expect(res.body).to.have.property("cartId");
          expect(res.body.created).to.eql(true);
          cartId01 = res.body.cartId;
          done();
        });
    });

    it("Should successfully get a cart", (done) => {
      chai
        .request(baseurl)
        .get("/carts/" + cartId01)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("items");
          expect(res.body).to.have.property("created");
          done();
        });
    });

    it("Should successfully add items to cart", (done) => {
      // cartdata = { productId: prodId };
      groceryCredentials.cartdata = groceryCredentials.cartdata || {};
      groceryCredentials.cartdata.productId = prodId;
      chai
        .request(baseurl)
        .post("/carts/" + cartId01 + "/items")
        .send(groceryCredentials.cartdata)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("created");
          expect(res.body).to.have.property("itemId");
          itemId01 = res.body.itemId;
          done();
        });
    });

    it("Should successfully get a cart items", (done) => {
      chai
        .request(baseurl)
        .get("/carts/" + cartId01 + "/items")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body[0]).to.have.property("id");
          expect(res.body[0]).to.have.property("productId");
          expect(res.body[0]).to.have.property("quantity");
          done();
        });
    });

    it("Should successfully modify item in cart", (done) => {
      chai
        .request(baseurl)
        .patch("/carts/" + cartId01 + "/items/" + itemId01)
        .send({ quantity: 2 })
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });

    it("Should successfully replace item in cart", (done) => {
      groceryCredentials.replacecartbody =
        groceryCredentials.replacecartbody || {};
      groceryCredentials.replacecartbody = { productId: prodId, quantity: 2 };
      chai
        .request(baseurl)
        .put("/carts/" + cartId01 + "/items/" + itemId01)
        .send(groceryCredentials.replacecartbody)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });

    it("Should successfully delete item in cart", (done) => {
      chai
        .request(baseurl)
        .delete("/carts/" + cartId01 + "/items/" + itemId01)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });
  context("Order", () => {
    it("Should successfully add items to cart", (done) => {
      chai
        .request(baseurl)
        .post("/carts/" + cartId01 + "/items")
        .send(groceryCredentials.cartdata)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("created");
          expect(res.body).to.have.property("itemId");
          itemId01 = res.body.itemId;
          done();
        });
    });

    it("Register a new API client", (done) => {
      chai
        .request(baseurl)
        .post("/api-clients")
        .send(authbody)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("accessToken");
          accesstoken = res.body.accessToken;
          accessToken01 = "Bearer " + accesstoken;
          done();
        });
    });

    it("Should successfully create a order", (done) => {
      groceryCredentials.createorderdata = {
        cartId: cartId01,
        customerName: "Bhuvana",
      };
      chai
        .request(baseurl)
        .post("/orders")
        .send(groceryCredentials.createorderdata)
        .set("Authorization", accessToken01)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("created");
          expect(res.body).to.have.property("orderId");
          orderId01 = res.body.orderId;
          done();
        });
    });

    it("Should successfully get the order", (done) => {
      chai
        .request(baseurl)
        .get("/orders")
        .set("Authorization", accessToken01)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body[0]).to.have.property("id");
          expect(res.body[0]).to.have.property("items");
          expect(res.body[0].items[0]).to.have.property("id");
          expect(res.body[0].items[0]).to.have.property("productId");
          expect(res.body[0].items[0]).to.have.property("quantity");
          expect(res.body[0]).to.have.property("customerName");
          expect(res.body[0]).to.have.property("created");
          expect(res.body[0]).to.have.property("comment");
          done();
        });
    });

    it("Should successfully update a order", (done) => {
      chai
        .request(baseurl)
        .patch("/orders/" + orderId01)
        .send(groceryCredentials.updateorderdata)
        .set("Authorization", accessToken01)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });

    it("Should successfully get updated a order", (done) => {
      chai
        .request(baseurl)
        .get("/orders/" + orderId01)
        .set("Authorization", accessToken01)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("id");
          expect(res.body).to.have.property("items");
          expect(res.body.items[0]).to.have.property("id");
          expect(res.body.items[0]).to.have.property("productId");
          expect(res.body.items[0]).to.have.property("quantity");
          expect(res.body).to.have.property("customerName");
          expect(res.body.customerName).to.be.eql("Bhuvana");
          done();
        });
    });

    it("Should successfully delete the order", (done) => {
      chai
        .request(baseurl)
        .delete("/orders/" + orderId01)
        .set("Authorization", accessToken01)
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });
});
