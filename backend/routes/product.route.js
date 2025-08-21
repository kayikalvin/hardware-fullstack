import express from "express";
import { getProducts } from "../controllers/product.controller.js";

const router = express.Router();

// Products with filters
router.get("/", getProducts);




export default router;
