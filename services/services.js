const productsMocks = require("../utils/mocks/mocksproducts");
const MongoLib = require("../lib/mongo");
const { ObjectId } = require("bson");



// The class is because in the constructure the cliente can connect - clase para en el futuro el cliente al conectar se instancia
class ProductsService {
    constructor() {
        this.collection = "products";
        this.mongoDB = new MongoLib;
    }
//GET
    async getProducts({ category, product_type, tag_list , brand, results}) { //product_category, product_type, product_tags              
        // console.log("Category: ", typeof (category));    
        // console.log("Type: ", product_type );
        // console.log("Tag: ", tag_list);
        // query
        
        var query = {};
        var limit = 10;

        if(category) {
            query.category = category
        }

        if (product_type) {
             query.product_type = product_type
        }

        if (tag_list) {
            query.tag_list = { $in : tag_list}
       }

       if (brand) {
        query.brand = brand
        }
        
        if(results){
            limit = parseInt(results)
            
        }
        
        // if ( category != null & product_type != null & tag_list != null & brand != null) {      

        //      query= {category: category, product_type: product_type, tag_list: {$in: tag_list}, brand: brand};

        //  } else if (category != null & product_type != null & tag_list != null) {   

        //     query= {category: category, product_type: product_type, tag_list: {$in: tag_list}};  

        //  } else if (category != null &  tag_list != null & brand != null ){

        //     query= {category: category, tag_list: {$in: tag_list}, brand: brand}; 

        //  } else if (category != null &  product_type != null & brand != null ){

        //     query= {category: category, product_type: product_type, brand: brand}; 

        //  } else if (category != null &  product_type != null ){

        //     query= {category: category, product_type: product_type}; 

        //  } else if (category != null &  tag_list != null ){

        //     query= {category: category, tag_list: {$in: tag_list}}; 

        //  } else if (category != null & brand != null ){

        //     query= {category: category, brand: brand}; 

        //  } else if (category != null){

        //     query= {category: category}; 

        //  } else if ( product_type != null & tag_list != null & brand != null) {      

        //     query= {product_type: product_type, tag_list: {$in: tag_list}, brand: brand};

        // } else if ( product_type != null & tag_list != null ) {      

        //     query= {product_type: product_type, tag_list: {$in: tag_list}};

        // } else if ( product_type != null & brand != null ) {      

        //     query= {product_type: product_type, brand: brand};

        // } else if ( product_type != null ) {      

        //     query= {product_type: product_type};

        // } else if ( tag_list != null & brand != null) {      

        //     query= { tag_list: {$in: tag_list}, brand: brand};

        // } else if ( tag_list != null) {      

        //     query= { tag_list: {$in: tag_list}};

        // } else if (brand != null) {      

        //     query= { brand: brand};

        //}                
        // console.log(proof_querie)
        //const query = (product_type && { product_type: product_type}) || (tag_list  && { tag_list : { $in: tag_list }}) || (category && { category: category}) 
        //const query = tag_list  && { tag_list : { $in: tag_list }};
        //console.log("test in test folder")
        //console.log("Final Query: ", query)
        const products = await this.mongoDB.getAll(this.collection, query, limit);
        return products || [];
    }
//GET product
    async getProduct({ productId }) {   
        
        const product = await this.mongoDB.get(this.collection, productId);
        return product || {};
    }
//POST
    async createProduct({ product }) {
        const createdProductId = await this.mongoDB.create(this.collection, product);
        console.log("Here is the created product Id: ",createdProductId)
        return createdProductId;
    }
//PUT
    async updateProduct({ productId, product }) {
        console.log("Message in Services")  
        const updateProductId = await this.mongoDB.update(
            this.collection,
            productId,
            product
        );
    return updateProductId;
    }
//PATCH   
    async patchProduct({ productId, price }) {

        console.log("product", price)  
        const updateProductId = await this.mongoDB.updateprice(
            this.collection,
            productId,
            price
        );
    return updateProductId;
    }

//DELETE
    async deleteProduct({ productId }) {
        const deletedProductId = await this.mongoDB.delete(
            this.collection,
            productId
    );
    return deletedProductId;
  }
}

module.exports = ProductsService;