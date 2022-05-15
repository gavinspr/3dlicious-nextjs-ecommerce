// // import { MongoClient } from "mongodb";

// // const MONGODB_URL: string | undefined = process.env.MONGODB_URL;

// // export async function getStaticProps() {
// //   const client = await MongoClient.connect(MONGODB_URL!);

// //   const db = client.db();

// //   const yourCollection = db.collection("yourCollection");

// //   const yourData = await yourCollection.find().toArray();

// //   client.close();

// //   return {
// //     props: data,
// //   };
// // }

// import { Db, MongoClient } from "mongodb";

// const MONGODB_URL: string | undefined = process.env.MONGODB_URL;
// const MONGODB_DB = process.env.MONGODB_DB;

// let cachedClient: MongoClient;
// let cachedDb: Db;

// export async function connectToDatabase() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // check the MongoDB URI
//   if (!MONGODB_URL) {
//     throw new Error("Define the MONGODB_URI environmental variable");
//   }
//   // check the MongoDB DB
//   if (!MONGODB_DB) {
//     throw new Error("Define the MONGODB_DB environmental variable");
//   }

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URL);
//   await client.connect();
//   let db = client.db(MONGODB_DB);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   };
// }

// import mongoose from "mongoose";

// const MONGO_URL = process.env.MONGO_URL;

// if (!MONGO_URL) {
//   throw new Error(
//     "Please define the MONGO_URL environment variable inside .env.local"
//   );
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached: = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGO_URL!, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
// export default dbConnect;

//IMPORT MONGOOSE
import mongoose, { Model, ConnectOptions } from "mongoose";

const { MONGODB_URL } = process.env;

const dbConnect = async () => {
  mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
};

export default dbConnect;
