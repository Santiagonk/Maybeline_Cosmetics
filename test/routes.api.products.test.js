const assert = require("assert");
const proxyquire = require("proxyquire");

const {
  productMock,
  ProductsServiceMock
} = require("../utils/mocks/mocksproducts");

const testServer = require("../utils/testServer");

describe("routes - api - products", function() {
  const route = proxyquire("../routes/api/api", {
    "../../services/services": ProductsServiceMock
  });

  const request = testServer(route);

  describe("GET /products", function() {
    
    it("should respond with status 200", function(done) {
      request.get("/api/v1/products").expect(200, done);
    });

    it("should respond with content type json", function(done) {
      request.get("/api/v1/products").expect("Content-type", /json/, done);
    });

    it("should respond with not error", function(done) {
      request.get("/api/v1/products").end((err, res) => {
        assert.strictEqual(err, null);
        done();
      });
    });

    it("should respond with the list of products", function(done) {
      request.get("/api/v1/products").end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: productMock,
          message: "products listed"
        });
        done();
      });
    });
  });
});
