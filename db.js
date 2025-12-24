const {MongoClient} = require("mongodb");
const { connect } = require("./route");
const client = new MongoClient(process.env.MONGOURI);
let db;
const connectDB = async () => {
  try {
    const connection = await client.connect();
    db = client.db(process.env.DBNAME);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const getDB = ()=> db;
module.exports={connectDB,getDB};