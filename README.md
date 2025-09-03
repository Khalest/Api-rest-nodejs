# API REST - Node.js

Una API REST básica construida con Node.js y Express.js que proporciona endpoints para la gestión de usuarios y productos.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Lógica Paso a Paso](#lógica-paso-a-paso)
- [Contribución](#contribución)

## 🚀 Características

- API REST básica con Express.js
- Endpoints para usuarios y productos
- Arquitectura modular con controladores y rutas separadas
- Soporte para JSON y datos de formularios
- Configuración con variables de entorno

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **dotenv** - Gestión de variables de entorno
- **ES6 Modules** - Sintaxis moderna de módulos

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Khalest/Api-rest-nodejs.git
cd api-rest
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
```

## ⚙️ Configuración

El proyecto utiliza las siguientes variables de entorno:

| Variable | Descripción                         | Valor por defecto |
| -------- | ----------------------------------- | ----------------- |
| `PORT`   | Puerto donde se ejecuta el servidor | `3000`            |

## 🚀 Uso

### Modo Desarrollo

```bash
npm run dev
```

Este comando ejecuta el servidor con `--watch` para reinicio automático en cambios.

### Modo Producción

```bash
node main.js
```

El servidor se iniciará en el puerto especificado (por defecto 3000).

## 🛣️ Endpoints

### Base URL

```
http://localhost:3000
```

### Usuarios

#### GET /users

Obtiene la lista de usuarios.

**Request:**

```http
GET /users
```

**Response:**

```
Users Route
```

#### POST /users

Crea un nuevo usuario.

**Request:**

```http
POST /users
Content-Type: application/json

{
  // Datos del usuario
}
```

**Response:**

```
Users Route Post
```

### Productos

#### GET /products

Obtiene la lista de productos.

**Request:**

```http
GET /products
```

**Response:**

```
Products Route
```

#### POST /products

Crea un nuevo producto.

**Request:**

```http
POST /products
Content-Type: application/json

{
  // Datos del producto
}
```

**Response:**

```
Products Route Post
```

## 🏗️ Arquitectura del Proyecto

```
api-rest/
├── controller/
│   ├── productController.js    # Controladores para productos
│   └── userController.js       # Controladores para usuarios
├── db/                         # Configuración de base de datos (vacío)
├── module/                     # Módulos adicionales (vacío)
├── routes/
│   ├── productRouter.js        # Rutas de productos
│   └── usersRouter.js          # Rutas de usuarios
├── main.js                     # Punto de entrada de la aplicación
├── package.json                # Configuración del proyecto y dependencias
└── README.md                   # Documentación del proyecto
```

### Descripción de Directorios

- **`controller/`**: Contiene los controladores que manejan la lógica de negocio
- **`routes/`**: Define las rutas y las conecta con los controladores
- **`db/`**: Destinado para configuración de base de datos (actualmente vacío)
- **`module/`**: Para módulos adicionales (actualmente vacío)

## 🔄 Lógica Paso a Paso

### 1. Inicialización del Servidor (`main.js`)

```javascript
// 1. Importación de dependencias
import { configDotenv } from "dotenv";
import express from "express";
import UserRouter from "./routes/UsersRouter.js";
import ProductRouter from "./routes/productRouter.js";

// 2. Configuración de variables de entorno
configDotenv();

// 3. Función de inicialización del servidor
function startServer() {
  // 4. Creación de la aplicación Express
  const app = express();

  // 5. Configuración de middlewares
  app.use(express.json()); // Para parsear JSON
  app.use(express.urlencoded({ extended: true })); // Para datos de formularios

  // 6. Configuración de rutas
  app.use("/users", UserRouter);
  app.use("/products", ProductRouter);

  // 7. Inicio del servidor
  app.listen(process.env.PORT || 3000);
  console.log("Iniciando servidor...");
}

// 8. Ejecución del servidor
startServer();
```

### 2. Configuración de Rutas

#### Rutas de Usuarios (`routes/usersRouter.js`)

```javascript
// 1. Importación del Router de Express y controladores
import { Router } from "express";
import { getUsersController, postUsersController } from "../controller/userController.js";

// 2. Creación del router para agrupar rutas relacionadas
const UserRouter = Router();

// 3. Definición de rutas y asociación con controladores
UserRouter.get("/", getUsersController); // GET /users
UserRouter.post("/", postUsersController); // POST /users

// 4. Exportación del router
export default UserRouter;
```

#### Rutas de Productos (`routes/productRouter.js`)

```javascript
// 1. Importación del Router de Express y controladores
import { Router } from "express";
import { getProductsController, postProductsController } from "../controller/productController.js";

// 2. Creación del router para productos
const ProductRouter = Router();

// 3. Definición de rutas
ProductRouter.get("/", getProductsController); // GET /products
ProductRouter.post("/", postProductsController); // POST /products

// 4. Exportación del router
export default ProductRouter;
```

### 3. Controladores (Lógica de Negocio)

#### Controlador de Usuarios (`controller/userController.js`)

```javascript
// Controlador para obtener usuarios
export const getUsersController = (req, res) => {
  // 1. Recibe request y response como parámetros
  // 2. Procesa la lógica de negocio (actualmente básica)
  // 3. Envía respuesta al cliente
  res.send("Users Route");
};

// Controlador para crear usuarios
export const postUsersController = (req, res) => {
  // 1. Recibe datos del request body
  // 2. Procesa la creación del usuario
  // 3. Envía respuesta de confirmación
  res.send("Users Route Post");
};
```

#### Controlador de Productos (`controller/productController.js`)

```javascript
// Controlador para obtener productos
export const getProductsController = (req, res) => {
  // 1. Maneja la petición GET para productos
  // 2. Procesa la lógica de obtención de datos
  // 3. Retorna la respuesta
  res.send("Products Route");
};

// Controlador para crear productos
export const postProductsController = (req, res) => {
  // 1. Maneja la petición POST para productos
  // 2. Procesa los datos recibidos
  // 3. Ejecuta la lógica de creación
  res.send("Products Route Post");
};
```

### 4. Flujo de una Petición HTTP

1. **Cliente** envía petición HTTP a un endpoint (ej: `GET /users`)
2. **Express** recibe la petición y busca la ruta coincidente
3. **Router** dirige la petición al middleware correspondiente
4. **Middleware** procesa la petición (parsing JSON, etc.)
5. **Controlador** ejecuta la lógica de negocio
6. **Respuesta** se envía de vuelta al cliente

```
Cliente -> Express -> Router -> Middleware -> Controlador -> Respuesta
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

- El proyecto está configurado para usar ES6 modules (`"type": "module"` en package.json)
- Los controladores actualmente retornan mensajes simples; están listos para implementar lógica más compleja
- Las carpetas `db/` y `module/` están preparadas para futuras implementaciones de base de datos y módulos adicionales

## 🔮 Próximas Mejoras

- [ ] Implementación de base de datos
- [ ] Validación de datos de entrada
- [ ] Manejo de errores
- [ ] Autenticación y autorización
- [ ] Documentación con Swagger
- [ ] Tests unitarios e integración
- [ ] Logging avanzado

---

**Autor**: Khalest  
**Versión**: 1.0.0  
**Licencia**: ISC
