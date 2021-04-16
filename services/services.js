const productsMocks = require("../utils/mocks/mocksproducts");
const MongoLib = require("../lib/mongo");


// The class is because in the constructure the cliente can connect - clase para en el futuro el cliente al conectar se instancia
class ProductsService {
    constructor() {
        this.collection = "products";
        this.mongoDB = new MongoLib;
    }
//GET
    async getProducts({ tags }) {
        const query = tags && { tags: { $in: tags}};
        const products = await this.mongoDB.getAll(this.collection, query);
        return products || [];
    }
//GET product
    getProduct({ productId }) {
        return Promise.resolve(productsMocks[0]);
    }
//POST
    createProduct({ product }) {
        return Promise.resolve(productsMocks[0]);
    }
//PUT
    updateProduct({ productId, product }) {
        return Promise.resolve(productsMocks[0]);
    }
//PATCH
    patchProduct({ productId, changedAttributes }) {
        return Promise.resolve(productsMocks[0]);
    }
//DELETE
    deleteProduct({ productId }) {
        return Promise.resolve(productsMocks[0]);
    }
}

module.exports = ProductsService;