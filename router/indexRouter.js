import express from "express";

import clientsRouter from "./clientsRouter.js";
import turnosRouter from "./turnosRouter.js";
import paymentRouter from "./paymentRouter.js";


const indexRouter = express.Router();

indexRouter.use("/clients", clientsRouter);
indexRouter.use("/turnos", turnosRouter)
indexRouter.use("/", paymentRouter)
indexRouter.use("/", paymentRouter)
indexRouter.use("/", paymentRouter)

export default indexRouter;
