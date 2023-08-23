import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./dataImport.js";
import productRoute from "./data/Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";

dotenv.config()
connectDatabase()
const app = express()
app.use(express.json())
app.use(cors())

// LOAD ALL PRODUCTS FROM SERVER
// app.get("/api/productContent", (req, res) => {
//     res.json(productContent)
// })

// // LOAD SINGLE PRODUCT FROM SERVER BY ID
// app.get("/api/productContent/:id", (req, res) => {
//     const product = productContent.find((p) => p.id == req.params.id)
//     res.json(product)
// })


//API
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)

//ERROR HANDLERS
// app.use(notFound)
// app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("APi is Running.............")
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server is Running on Port ${PORT}`))