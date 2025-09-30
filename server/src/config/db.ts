import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL;
        if (!url) throw new Error("MONGO_URL is not defined");
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
export default connectDB;