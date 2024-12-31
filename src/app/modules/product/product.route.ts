import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProduct);

router.get("/", ProductController.getAllProducts);

router.get('/categories', ProductController.getCategories);

router.get("/:id", ProductController.getSingleProduct);

router.delete("/delete-product/:id", ProductController.deleteProduct);

router.patch("/update-product/:id", ProductController.updateProduct);

export const ProductRoutes = router;
