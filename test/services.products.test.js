const assert = require("assert");
const proxyquire = require("proxyquire");

const {
  MongoLibMock,
  getAllStub,
  createStub
} = require("../utils/mocks/mongoLib");

const {
  productMock,
  filteredProductsMock
} = require("../utils/mocks/mocksproducts");

describe("services - products", function() {
  const ProductsService = proxyquire("../services/services", {
    "../lib/mongo": MongoLibMock
  });

  const productsService = new ProductsService();

  describe("when getProducts method is called", async function() {
    it(" should call the getAll MongoLib method", async function() {
      await productsService.getProducts({});
      assert.strictEqual(getAllStub.called, true);
    });

    it("should return an array of products", async function() {
      const result = await productsService.getProducts({});
      const expected = productMock;
      assert.deepStrictEqual(result, expected);
    });
  });

  describe("when getProducts method is called with tags", async function() {
    it("should all the getAll MongoLib method with tags args", async function() {
      await productsService.getProducts({ tag_list: ["Vegan"] });
      const tagQuery = { tag_list: { $in: ["Vegan"] } };
      assert.strictEqual(getAllStub.calledWith("products", tagQuery), true);
    });

    it("should return an array of products filtered by the tag", async function() {
      const result = await productsService.getProducts({ tag_list: ["Vegan"] });
      const expected = filteredProductsMock("Vegan");
      assert.deepStrictEqual(result, expected);
    });
  });
});
