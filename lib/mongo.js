const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config'); // propiedad del modulo por eso de usa el destrocturing

// Get our ENV variables - Traer las variables entorno
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);

//Create Our Mongo Uri - Crear la variable Mongo Uri
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true}`; //prettier-ignore

class MongoLib {
    //constructor of the MongoLib Class
    constructor() {      
      this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      this.dbName = DB_NAME ;      
    }
    // CONNECT
    async connect() {
        if (!MongoLib.connection) {
          try {
            await this.client.connect()
            // poner en debug al terminar
            console.log('Connected successfully to mongo')
            MongoLib.connection = this.client.db(this.dbName)
          } catch (error) {
            console.log(error)
          } 
        }
        return MongoLib.connection
      }
    //GET: get all DB or filter by type, category or  tags - Traer toda la base de datos o filtrar por tipo, categoria o tags 
      getAll(collection, query) {    
        return this.connect().then(db => {      
          return db
            .collection(collection)
            .find(query)
            .toArray();
        });
      }
    //GET ONE: get by id . traer por id
      get(collection, id) {         
        if (id.length > 4) {
          id = ObjectId(id)
        } else {
          id =  parseInt(id)
        } 
        return this.connect().then(db => {
          return db.collection(collection).findOne({ _id: id });
        });
      }
    //POST
      create(collection, data) {   
        return this.connect()
          .then(db => {
            return db.collection(collection).insertOne(data);
          })
          .then(result => result.insertedId);
      }
    //PUT
      update(collection, id, data) {                 
        if (id.length > 4) {
          id = ObjectId(id)
        } else {
          id =  parseInt(id)
        }          
        return this.connect()
          .then(db => {
            return db
              .collection(collection)
              .updateOne({ _id: id }, { $set: data }, { upsert: true });
          })
          .then(result => result.upsertedId || id);
      }
    //PATCH
    updateprice(collection, id, price) {
      console.log("PATCH")
      if (id.length > 4) {
        id = ObjectId(id)
      } else {
        id =  parseInt(id)
      }  
      return this.connect()
        .then(db => {
          return db
            .collection(collection)
            .updateOne({ _id: id }, { $set:{price: price} }, { upsert: true });
        })
        .then(result => result.upsertedId || id);
    }
    //DELETE
    delete(collection, id) {
      if (id.length > 4) {
        id = ObjectId(id)
      } else {
        id =  parseInt(id)
      }  
      return this.connect()
        .then(db => {
        return db.collection(collection).deleteOne({ _id: id });
          })
       .then(() => id);
      }
    }
    
module.exports = MongoLib;
    