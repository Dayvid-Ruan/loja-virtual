const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../api/app");

chai.use(chaiHttp);

const { expect } = chai;

describe("GET/api/products", () => {
  describe("products retornado com sucesso", () => {
    let response;
    let token;
    before(async () => {
      response = await chai.request(server)
        .post("/login")
        .send({
          email: "user@test.com",
          password: "userTest123",
        });
      token = response.body.token;

      response = await chai.request(server)
        .get("/products")
        .auth(token);
    });
    it("retorna o código de status 200", () => {
      expect(response).to.have.status(200);
    });
    it("retorna um objeto", () => {
      expect(response.body).to.be.a("array");
    });
    it("retorna 6 produtos", () => {
      expect(response.body.length).to.be.equal(6);
    });
    it("o primeiro produto esperado", () => {
      expect(response.body[0]).to.have.property("name", "Product1");
    });
    it("o ultimo produto esperado", () => {
      expect(response.body[5]).to.have.property("name", "Product6");
    });
  });
});