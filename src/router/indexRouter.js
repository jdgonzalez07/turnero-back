import express from "express";

import clientsRouter from "./clientsRouter.js";
import turnosRouter from "./turnosRouter.js";


const indexRouter = express.Router();

indexRouter.use("/clients", clientsRouter);
indexRouter.use("/turnos", turnosRouter)

export default indexRouter;
