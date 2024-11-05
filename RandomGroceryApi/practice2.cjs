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
// const { delay } = require("../helpers/helperGrocery.cjs");
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Grocery Store APIs", () => {
  it("Should successfully get the status", async () => {
    await chai
      .request(baseurl)
      .get("/status")
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("status");
      });
  });

  it("Should successfully get the products", async () => {
    await delay(500);
    await chai
      .request(baseurl)
      .get("/products")
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body[0]).to.have.property("id");
        expect(res.body[0]).to.have.property("category");
        expect(res.body[0]).to.have.property("name");
        expect(res.body[0]).to.have.property("inStock");
        prodId = res.body[0].id;
      });

    //should retrive single product
    const res = await chai.request(baseurl).get("/products/" + prodId);
    expect(res).to.have.status(200);
    expect(res.body).to.have.property("id");
    expect(res.body).to.have.property("category");
    expect(res.body).to.have.property("name");
    expect(res.body).to.have.property("manufacturer");
    expect(res.body).to.have.property("price");
    expect(res.body).to.have.property("current-stock");
    expect(res.body).to.have.property("inStock");
  });

  it("Should successfully create a cart", async () => {
    await delay(500);
    await chai
      .request(baseurl)
      .post("/carts")
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("created");
        expect(res.body).to.have.property("cartId");
        cartId01 = res.body.cartId;
      });

    //Should successfully get a cart
    await chai
      .request(baseurl)
      .get("/carts/" + cartId01)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("items");
        expect(res.body).to.have.property("created");
      });

    //Should successfully add items to cart
    groceryCredentials.cartdata = groceryCredentials.cartdata || {};
    groceryCredentials.cartdata.productId = prodId;
    await chai
      .request(baseurl)
      .post("/carts/" + cartId01 + "/items")
      .send(groceryCredentials.cartdata)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("created");
        expect(res.body).to.have.property("itemId");
        itemId01 = res.body.itemId;
      });

    //Should successfully get a cart items
    await chai
      .request(baseurl)
      .get("/carts/" + cartId01 + "/items")
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body[0]).to.have.property("id");
        expect(res.body[0]).to.have.property("productId");
        expect(res.body[0]).to.have.property("quantity");
      });
  });

  it("Should successfully modify item in cart", async () => {
    await delay(500);
    await chai
      .request(baseurl)
      .patch("/carts/" + cartId01 + "/items/" + itemId01)
      .send({ quantity: 2 })
      .then((res) => {
        expect(res).to.have.status(204);
      });

    // Should successfully replace item in cart
    await delay(500);
    groceryCredentials.replacecartbody =
      groceryCredentials.replacecartbody || {};
    groceryCredentials.replacecartbody = { productId: prodId, quantity: 2 };
    await chai
      .request(baseurl)
      .put("/carts/" + cartId01 + "/items/" + itemId01)
      .send(groceryCredentials.replacecartbody)
      .then((res) => {
        expect(res).to.have.status(204);
      });
  });

  it("Should successfully delete item in cart", async () => {
    await delay(500);
    await chai
      .request(baseurl)
      .delete("/carts/" + cartId01 + "/items/" + itemId01)
      .then((res) => {
        expect(res).to.have.status(204);
      });
  });

  it("Should successfully register new client and get the orders", async () => {
    await delay(500);
    await chai
      .request(baseurl)
      .post("/carts/" + cartId01 + "/items")
      .send(groceryCredentials.cartdata)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("created");
        expect(res.body).to.have.property("itemId");
        expect(res.body.created).to.eql(true);
      });

    //register new API client
    await delay(500);
    await chai
      .request(baseurl)
      .post("/api-clients")
      .send(authbody)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("accessToken");
        accesstoken = res.body.accessToken;
        accessToken01 = "Bearer " + accesstoken;
      });

    //Should successfully create a order
    await delay(500);
    groceryCredentials.createorderdata = {
      cartId: cartId01,
      customerName: "Bhuvana",
    };
    await chai
      .request(baseurl)
      .post("/orders")
      .send(groceryCredentials.createorderdata)
      .set("Authorization", accessToken01)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("created");
        expect(res.body).to.have.property("orderId");
        orderId01 = res.body.orderId;
      });
    // should get all the orders
    await delay(500);
    await chai
      .request(baseurl)
      .get("/orders")
      .set("Authorization", accessToken01)
      .then((res) => {
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

    //Should successfully update a order
    await delay(500);
    await chai
      .request(baseurl)
      .patch("/orders/" + orderId01)
      .send(groceryCredentials.updateorderdata)
      .set("Authorization", accessToken01)
      .then((res) => {
        expect(res).to.have.status(204);
      });

    //Should successfully get updated a order
    await delay(500);
    await chai
      .request(baseurl)
      .get("/orders/" + orderId01)
      .set("Authorization", accessToken01)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("items");
        expect(res.body.items[0]).to.have.property("id");
        expect(res.body.items[0]).to.have.property("productId");
        expect(res.body.items[0]).to.have.property("quantity");
        expect(res.body).to.have.property("customerName");
        expect(res.body.customerName).to.be.eql("Bhuvana");
      });
    //Should successfully delete the order
    await delay(500);
    await chai
      .request(baseurl)
      .delete("/orders/" + orderId01)
      .set("Authorization", accessToken01)
      .then((res) => {
        expect(res).to.have.status(204);
      });
  });
  it.skip("Should successfully get the products", async () => {
    const res = await getProducts();
    res.should.have.status(statusCodes.OK);
    const product = res.body[0];
    const expectedProps = {
      id: product.id,
      category: product.category,
      name: product.name,
      inStock: product.inStock,
    };

    for (const [prop, value] of Object.entries(expectedProps)) {
      product.should.have.property(prop).that.equals(value);
    }
    prodId = product.id;

    //Should successfully get single product
    const res01 = await getSingleProduct();
    res01.should.have.status(statusCodes.OK);
    const product01 = res01.body;
    const expectedProps01 = {
      id: product01.id,
      name: product01.name,
      category: product01.category,
      inStock: product01.inStock,
      price: product01.price,
    };
    for (const [prop, value] of Object.entries(expectedProps01)) {
      product01.should.have.property(prop).that.equals(value);
    }
  });
});
