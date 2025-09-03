// Importaciones
import { configDotenv } from "dotenv";
import express from "express";
import UserRouter from "./routes/UsersRouter.js";
import ProductRouter from "./routes/productRouter.js";
configDotenv();

// Iniciar Servidor
function startServer() {
  const app = express();

  // Middlewares
  app.use(express.json()); // Recibir data en Json
  app.use(express.urlencoded({ extended: true })); // Recibir data de formularios

  // Listado de Rutas
  app.use("/users", UserRouter);
  app.use("/products", ProductRouter);

  app.listen(process.env.PORT || 3000);
  console.log("Iniciando servidor...");
}

startServer();
