import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; //don't forget to add db.js
import Product from "./models/product.model.js";
import UserInfo from "./models/user.model.js";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); //allow us to accecpt json data in the body


app.use("/api/products",productRoutes)
//create
// app.post("/api/products",async(req,res)=>{
//     const product = req.body;

//     if(!product.name || !product.image || !product.price){
//         return res.status(400).json({success: false, message: "Please provide all fields"});
//     }

//     const newProduct = new Product(product)

//     try {
//         await newProduct.save();
//         res.status(201).json({success: true, data: newProduct});
//     } catch (error) {
//         console.error("Error in Create Product:",error.message)
//         res.status(500).json({success: false, message:"Server Error"})
//     }
// });

//update
// app.put("/api/products/:id",async(req,res)=>{
//     const {id} = req.params;

//     const product = req.body;
    
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({success:false,message:"ID not found!"})
//     }

//     try {
//         const updatedProduct =await Product.findByIdAndUpdate(id,product,{new:true})
//         res.status(201).json({success:true, data: updatedProduct})
//     } catch (error) {
//         res.status(500).json({success:false, message:"Server Error"})
//     }
// })
    
//delete 
// app.delete("/api/products/:id",async(req,res)=>{
//     const {id} = req.params;
//     try {
//         await Product.findByIdAndDelete(id)
//         res.status(201).json({success:true,message:"Deleted!"})
//     } catch (error) {
//         res.status(400).json({success:false,message:"Incorrect ID"})
//     }
// })

// app.get("/api/products",(res,req)=>{
//     res.
// })

//for user database
app.post("/api/users",async(req,res)=>{
    const user = req.body;

    if(!user.username || !user.email || !user.address){
        return res.status(400).json({success:false, message:"Please provide all data!"})
    }

    const newUser = new UserInfo(user)

    try {
        await newUser.save();
        res.status(201).json({success:true, data: newUser});
    } catch (error) {
        res.status(500).json({success:false, message:"Server Error"})
    }
});

app.listen(5001,()=>{
    connectDB();
    console.log("Server started at http://localhost:5001");
});

// sSxyfknaDZXXMpQy