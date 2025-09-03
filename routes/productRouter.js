import { Router } from "express";
import { getProductsController } from "../controller/productController.js";
import { postProductsController } from "../controller/productController.js";

// /products
const ProductRouter = Router();

ProductRouter.get("/", getProductsController);
ProductRouter.post("/", postProductsController);

export default ProductRouter;
