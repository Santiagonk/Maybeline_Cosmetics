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
    
    async getAll(collection, query) {
        try {      
          const db = await this.connect()
          return await db.collection(collection).find(query).toArray()
        } catch (error) {
          console.log(error);
        }
      }

}

module.exports = MongoLib;