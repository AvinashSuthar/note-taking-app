import mongoose from "mongoose";

const connection = {
  isConnected: 0,
};

async function connectDB() {
  if (connection.isConnected) {
    console.log("Already Connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  }
}
export default connectDB;
