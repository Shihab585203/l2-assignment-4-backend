import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post('/create-payment-data', paymentController.createPaymentData)
router.post("/create-payment-intent", paymentController.createPaymentIntent);

export const paymentRoutes = router;