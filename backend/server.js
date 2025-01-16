import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; //don't forget to add db.js
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json()); //allow us to accecpt json data in the body


app.use("/api/products",productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"))
    })
}
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


app.listen(PORT,()=>{
    connectDB();
    console.log("Server started at http://localhost:5001");
});

// sSxyfknaDZXXMpQy