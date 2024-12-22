import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post("/", paymentController.createPaymentIntent);

export const paymentRoutes = router;