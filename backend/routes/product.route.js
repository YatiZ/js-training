import express from "express";


import { createProducts, deletedProduct, getProducts, updatedProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts)

//create
router.post("/",createProducts);

//update
router.put("/:id",updatedProduct);
    
//delete 
router.delete("/:id",deletedProduct)


export default router;