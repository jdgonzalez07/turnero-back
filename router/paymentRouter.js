import express from "express";
import paymentController from "../controllers/payment.controller.js";

const { createOrder, receiveWebhook } = paymentController;

const paymentRouter = express.Router();

paymentRouter.post("/create-order", createOrder);
paymentRouter.get("/success", (req, res) => res.send("Success"));
paymentRouter.get("/pending", (req, res) => res.send("Pending"));
paymentRouter.get("/failure", (req, res) => res.send("Failure"));
paymentRouter.post("/webhook", receiveWebhook);

export default paymentRouter;
