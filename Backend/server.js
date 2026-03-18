import { connectDB } from "./config/db.js";
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";

dotenv.config(); // to have access to the variable inside .env file
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // parse incoming JSON request bodies

app.use("/api/users", authRoutes); // auth routes (register, login, profile)
app.use("/api/cart", cartRoutes);  // cart routes (get, add, update, remove, clear)

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});