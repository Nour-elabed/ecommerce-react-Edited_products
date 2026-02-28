import { time } from "console";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true, 
    }

}, { timestamps: true });// to have createdAt and updatedAt fields
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){// to check if the password is modified or not if its not we skip hashing and move to the next middleware
        next();
    }  
    const salt = await bcrypt.genSalt(10);// to generate a salt with 10 rounds
    this.password = bcrypt.hash(this.password, salt);// to hash the password with the salt
    next();
})
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);// to compare the entered password with the hashed password in the database
} // hashing the password inside the model to make sure that the password is always hashed before saving to the database and also to have a method to compare the entered password with the hashed password in the database