import { Router } from "express";
import { getUsersController } from "../controller/userController.js";
import { postUsersController } from "../controller/userController.js";

// Crear un Router ->  Agrupar rutas
const UserRouter = Router();

// ->  Indica la Ruta y que funcion se ejecutará
UserRouter.get("/", getUsersController);
UserRouter.post("/", postUsersController);

export default UserRouter;
