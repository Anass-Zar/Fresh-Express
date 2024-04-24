import express from "express";
import { listProducts, addProduct, deleteProduct, updateProduct, detailsProduct, searchProducts } from "../controllers/products_controller.js";

const router = express.Router();

router.get("/list_products" , listProducts)
router.post("/add_product" , addProduct)
router.delete("/delete_product/:id" , deleteProduct)
router.post("/update_product/:id" , updateProduct)
router.get("/details_product/:id" , detailsProduct)
router.get("/search_products" , searchProducts)

export default router;