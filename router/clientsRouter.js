import express from "express";
import clientsController from "../controllers/clientsControllers.js";
const { getClients } = clientsController;


const clientsRouter = express.Router();

clientsRouter.get("/", getClients)

export default clientsRouter;