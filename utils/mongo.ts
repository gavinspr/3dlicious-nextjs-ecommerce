import mongoose, { Model, ConnectOptions } from "mongoose";

const { MONGODB_URL } = process.env;

const dbConnect = async () => {
  mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));
};

export default dbConnect;
