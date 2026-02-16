import mongoose from "mongoose";
export const connectDB=async()=>{
    const MONGODB_URI='mongodb+srv://nour:nour123@cluster0.opfx1yj.mongodb.net/Ecommerce';
await mongoose.connect(MONGODB_URI).then(()=>{// we can also use async await to connect to the database first then start server (not available in express5) : await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB');
}).catch((err)=>{
  console.error('Error connecting to MongoDB',err);
});

}
 