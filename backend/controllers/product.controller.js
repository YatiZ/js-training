import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        console.log(products)
        res.status(201).json({success:true,data:products})
    } catch (error) {
        res.status(400).json({success:false,message:"No data"})
    }
}

export const createProducts = async(req,res)=>{
    const product = req.body;

    if(!product.name || !product.image || !product.price){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create Product:",error.message)
        res.status(500).json({success: false, message:"Server Error"})
    }
}

export const updatedProduct = async(req,res)=>{
    const {id} = req.params;

    const product = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"ID not found!"})
    }

    try {
        const updatedProduct =await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(201).json({success:true, data: updatedProduct})
    } catch (error) {
        res.status(500).json({success:false, message:"Server Error"})
    }
}

export const deletedProduct= async(req,res)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id)
        res.status(201).json({success:true,message:"Deleted!"})
    } catch (error) {
        res.status(400).json({success:false,message:"Incorrect ID"})
    }
}