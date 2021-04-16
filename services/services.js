const productsMocks = require("../utils/mocks/mocksproducts");
// The class is because in the constructure the cliente can connect - clase para en el futuro el cliente al conectar se instancia
class ProductsService {
    constructor() {

    }
//GET
    getProducts({ tags }) {
        return Promise.resolve(productsMocks);
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