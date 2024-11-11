import mongoose from "mongoose";

let isConnected = false;

export async function connectMongoDB() {
    if (isConnected) {
        console.log("Using existing MongoDB connection");
        return;
    }
    try {
        await mongoose.connect(process.env.DB_CONN_STRING as string);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}
