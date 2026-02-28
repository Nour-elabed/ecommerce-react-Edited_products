import express from 'express';
import dotenv from 'dotenv';
dotenv.config();// to have access to the variable inside .env file
const PORT= process.env.PORT || 5000; // in case of error we will time 5000 manually
const app= express()  
app.get('/',(req,res)=>{ //req what comes from the client and res what we send to the client
    res.send('Hello World');
})  
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})