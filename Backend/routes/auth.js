import express from "express";
import user from "../models/userModel.js";
//Register route
const router= express.Router(); // to create a router object to handle the routes related to authentication
router.post('/register', async (req,res)=>{
    const {username, email, password} = req.body; // to get the username, email and password from the request body(destructure)
   try{
    if(!username || !email || !password){ // to check if the username, email and password are provided or not   
        return res.status(400).json({message: "Please fill all the fields"});
    }
    const userExists = await user.findOne({email}); // to check if the user already exists or not by finding the user with the email in the database
    if(userExists){
        return res.status(400).json({message: "User already exists"});
    }  
    const user= await user.create({ // to create a new user in the database with the provided username, email and password
        username,
        email,  
        password
    });
    res.status(201).json({id: user._id, username: user.username, email: user.email,}); // to send a response with the status code 201 and a message and the user object

   } catch(err){ 
        return res.status(500).json({message: "Internal server error"});
}
})