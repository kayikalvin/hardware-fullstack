import { getCategories } from "../controllers/category.controller.js";

import express from "express";  


const router = express.Router();

// Fetch distinct categories
router.get("/", getCategories);


export default router;
