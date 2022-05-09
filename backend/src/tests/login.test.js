const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../api/app");

chai.use(chaiHttp);

const { expect } = chai;

describe("POST/api/login", () => {
  describe("login efetuado com sucesso", () => {
    let response = {};
    before(async () => {
      response = await chai.request(server)
        .post("/login")
        .send({
          email: "user@test.com",
          password: "userTest123"
        });
    });
    it("retorna o código de status 200", () => {
      expect(response).to.have.status(200);
    });
    it("retorna um objeto", () => {
      expect(response.body).to.be.a("object");
    });
    it("possui a propriedade name", () => {
      expect(response.body).to.have.property("name", "User Test");
    });
    it("possui a propriedade email", () => {
      expect(response.body).to.have.property("email", "user@test.com");
    });
    it("possui a propriedade role", () => {
      expect(response.body).to.have.property("role", "usuario");
    });
    it("possui a propriedade token", () => {
      expect(response.body).to.have.property("token", `${ response.body.token }`);
    });
  });
});