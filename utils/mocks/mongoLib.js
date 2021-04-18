const { productMock, filteredProductsMock } = require("./mocksproducts");
const sinon = require("sinon");

const getAllStub = sinon.stub();
const tagQuery = { tag_list: { $in: ["Vegan"] } };

getAllStub.withArgs("products").resolves(productMock);
getAllStub
    .withArgs("products", tagQuery)
    .resolves(filteredProductsMock("Vegan"));

const createStub = sinon.stub().resolves("6bedb1267d1ca7f3053e2875");


class MongoLibMock {
    getAll(collection, query){
        return getAllStub(collection, query);
    }

    create(collection, data) {
        return createStub(collection, data);
    }
}


module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};