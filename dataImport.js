import express from "express";
import Product from "./Models/ProductModel.js";
import productContent from "./data/productContent.js";


const ImportData = express.Router()

ImportData.post("/productContent", async (req, res) => {
    await Product.deleteOne({})
    const importProduct = await Product.insertMany(productContent)
    res.send({ importProduct })
})
export default ImportData