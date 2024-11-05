const chai = require("chai");
const chaihttp = require("chai-http");
const expect = chai.expect;
chai.use(chaihttp);
const { groceryCredentials } = require("../helpers/helperGrocery.cjs");
const { baseurl, authbody, updateorderdata } = groceryCredentials();

describe("Grocery Store APIs", () => {
  context("Status", () => {
    it("Should successfully get the status", async () => {
      res = await chai.request(baseurl).get("/status");
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("status");
    });
  });
  
  context("Product", () => {
    it("Should successfully get all the products", async () => {
      res = await chai.request(baseurl).get("/products");
      expect(res).to.have.status(200);
      expect(res.body[0]).to.have.property("id");
      expect(res.body[0]).to.have.property("category");
      expect(res.body[0]).to.have.property("name");
      expect(res.body[0]).to.have.property("inStock");
      prodId = res.body[0].id;
    });

    it("Should successfully get single product", async () => {
      res = await chai.request(baseurl).get("/products/" + prodId);
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("category");
      expect(res.body).to.have.property("name");
      expect(res.body).to.have.property("manufacturer");
      expect(res.body).to.have.property("price");
      expect(res.body).to.have.property("current-stock");
      expect(res.body).to.have.property("inStock");
    });
  });

  context("Cart", () => {
    it("Should successfully create a cart", async () => {
      res = await chai.request(baseurl).post("/carts");
      expect(res).to.have.status(201);
      expect(res.body).to.have.property("created");
      expect(res.body).to.have.property("cartId");
      cartId01 = res.body.cartId;
    });

    it("Should successfully get a cart", async () => {
      res = await chai.request(baseurl).get("/carts/" + cartId01);
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("items");
      expect(res.body).to.have.property("created");
    });

    it("Should successfully add items to cart", async () => {
      cartdata = { productId: prodId };
      res = await chai
        .request(baseurl)
        .post("/carts/" + cartId01 + "/items")
        .send(cartdata);
      expect(res).to.have.status(201);
      expect(res.body).to.have.property("created");
      expect(res.body).to.have.property("itemId");
      itemId01 = res.body.itemId;
    });

    it("Should successfully get a cart items", async () => {
      res = await chai.request(baseurl).get("/carts/" + cartId01 + "/items");
      expect(res).to.have.status(200);
      expect(res.body[0]).to.have.property("id");
      expect(res.body[0]).to.have.property("productId");
      expect(res.body[0]).to.have.property("quantity");
    });

    it("Should successfully modify item in cart", async () => {
      res = await chai
        .request(baseurl)
        .patch("/carts/" + cartId01 + "/items/" + itemId01)
        .send({ quantity: 2 });
      expect(res).to.have.status(204);
    });

    it("Should successfully replace item in cart", async () => {
      replacecartbody = { productId: prodId, quantity: 2 };
      res = await chai
        .request(baseurl)
        .put("/carts/" + cartId01 + "/items/" + itemId01)
        .send(replacecartbody);
      expect(res).to.have.status(204);
    });
    it("Should successfully delete item in cart", async () => {
      res = await chai
        .request(baseurl)
        .delete("/carts/" + cartId01 + "/items/" + itemId01);
      expect(res).to.have.status(204);
    });
  });

  context("Order", () => {
    it("Should successfully add items to cart", async () => {
      res = await chai
        .request(baseurl)
        .post("/carts/" + cartId01 + "/items")
        .send(cartdata);
      expect(res).to.have.status(201);
      expect(res.body).to.have.property("created");
      expect(res.body).to.have.property("itemId");
      itemId01 = res.body.itemId;
    });

    it("Register a new API client", async () => {
      res = await chai.request(baseurl).post("/api-clients").send(authbody);
      expect(res).to.have.status(201);
      expect(res.body).to.have.property("accessToken");
      accesstoken = res.body.accessToken;
      accessToken01 = "Bearer " + accesstoken;
    });

    it("Should successfully create a order", async () => {
      const createorderdata = { cartId: cartId01, customerName: "Bhuvana" };
      res = await chai
        .request(baseurl)
        .post("/orders")
        .send(createorderdata)
        .set("Authorization", accessToken01);
      expect(res).to.have.status(201);
      expect(res.body).to.have.property("created");
      expect(res.body).to.have.property("orderId");
      orderId01 = res.body.orderId;
    });

    it("Should successfully get the order", async () => {
      res = await chai
        .request(baseurl)
        .get("/orders")
        .set("Authorization", accessToken01);
      expect(res).to.have.status(200);
      expect(res.body[0]).to.have.property("id");
      expect(res.body[0]).to.have.property("items");
      expect(res.body[0].items[0]).to.have.property("id");
      expect(res.body[0].items[0]).to.have.property("productId");
      expect(res.body[0].items[0]).to.have.property("quantity");
      expect(res.body[0]).to.have.property("customerName");
      expect(res.body[0]).to.have.property("created");
      expect(res.body[0]).to.have.property("comment");
    });

    it("Should successfully update a order", async () => {
      res = await chai
        .request(baseurl)
        .patch("/orders/" + orderId01)
        .send(updateorderdata)
        .set("Authorization", accessToken01);
      expect(res).to.have.status(204);
    });

    it("Should successfully get updated order", async () => {
      res = await chai
        .request(baseurl)
        .get("/orders/" + orderId01)
        .set("Authorization", accessToken01);
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("items");
      expect(res.body.items[0]).to.have.property("id");
      expect(res.body.items[0]).to.have.property("productId");
      expect(res.body.items[0]).to.have.property("quantity");
      expect(res.body).to.have.property("customerName");
      expect(res.body.customerName).to.be.eql("Bhuvana");
    });

    it("Should successfully delete the order", async () => {
      res = await chai
        .request(baseurl)
        .delete("/orders/" + orderId01)
        .set("Authorization", accessToken01);
      expect(res).to.have.status(204);
    });
  });
});
