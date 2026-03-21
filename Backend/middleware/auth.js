import express from "express";
import Joi from "joi";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

router.post("/register", validate(registerSchema), async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User with this email already exists");
        }
        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            res.status(400);
            throw new Error("Username is already taken");
        }

        const newUser = await User.create({ username, email, password });

        const token = generateToken(newUser._id);
        res.status(201).json({
            success: true,
            data: { id: newUser._id, username: newUser.username, email: newUser.email, token },
            message: "Account created successfully",
        });
    } catch (err) {
        next(err);
    }
});

router.post("/login", validate(loginSchema), async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401);
            throw new Error("Invalid email or password");
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            res.status(401);
            throw new Error("Invalid email or password");
        }

        const token = generateToken(user._id);
        res.status(200).json({
            success: true,
            data: { id: user._id, username: user.username, email: user.email, isAdmin: user.isAdmin, token },
            message: "Logged in successfully",
        });
    } catch (err) {
        next(err);
    }
});

router.get("/profile", protect, async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: req.user,
            message: "Profile fetched",
        });
    } catch (err) {
        next(err);
    }
});

const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

export default router;