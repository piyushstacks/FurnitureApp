import { Router } from "express";
import { addFurniture, deleteFurniture, getFurniture, getFurnitureById } from "../controllers/furniture.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const furnitureRouter=Router();
furnitureRouter.get('/',getFurniture)
furnitureRouter.post('/',
    upload.array('images', 10)
    ,addFurniture)
furnitureRouter.get('/:id',getFurnitureById)
furnitureRouter.delete('/:id',deleteFurniture)
export {furnitureRouter}