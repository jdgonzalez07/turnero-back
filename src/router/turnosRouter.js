import express from "express";
import turnosController from "../controllers/turnosController.js";
const {getAllTurnos, createTurno, getOneTurno} = turnosController;

const turnosRouter = express.Router()

turnosRouter.get("/", getAllTurnos)
turnosRouter.get("/:id", getOneTurno)
turnosRouter.post("/", createTurno)

export default turnosRouter;