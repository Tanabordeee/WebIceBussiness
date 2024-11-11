import mongoose from "mongoose";

export async function connectMongoDB() {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB is already connected");
    return;
  }
  
  try {
    await mongoose.connect(process.env.DB_CONN_STRING as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    throw new Error("Database connection failed");
  }
}