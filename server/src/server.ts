import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from "morgan";
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes)

// 🧠 Đảm bảo connect DB xong mới listen
const startServer = async () => {
    try {
        await connectDB(); // ✅ await
        console.log("✅ MongoDB connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err);
        process.exit(1);
    }
};

startServer();
