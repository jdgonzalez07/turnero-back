import "dotenv/config.js";
import express from "express";
import indexRouter from "./router/indexRouter.js";
import "./config/database.js";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.use(
  "/api",
  (req, res, next) => {
    console.log(`Hicieron una petición a mi back: ${req.url}`);
    next();
  },
  indexRouter
);

server.get("/api", (req, res) => {
  res.send("Estoy en el servidor en /api");
});

server.get("/", (req, res) => {
  res.send("Estoy en el servidor en /");
});

server.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
