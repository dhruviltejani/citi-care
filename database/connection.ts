import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected to MongoDB");
        return;
    };

    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
};