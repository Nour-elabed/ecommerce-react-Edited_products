import User from "../models/userModel.js";
import jwt from "jsonwebtoken"; // library that creztes and verifies JSON Web Tokens (JWTs) for authentication and authorization purposes
export const protect = async (req,res,next) => { // to protect the routes that require authentication by checking if the user is authenticated or not
    let token; // to store the token that is sent by the client in the request header
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){ // to check if the authorization header is present and if it starts with "Bearer" which is the standard for sending JWTs in the authorization header
       token= req.headers.authorization.split(" ")[1]; // to get the token from the authorization header by splitting the header value and getting the second part which is the token
       const decoded= jwt.verify(token.env.JWT_SECRET)
    }

} 
//authorization : Bearer <token> is the standard format for sending JWTs in the authorization header where "Bearer" is a keyword that indicates that the token is a bearer token and <token> is the actual JWT that is sent by the client in the request header
