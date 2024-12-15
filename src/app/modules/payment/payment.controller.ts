import { Request, Response } from "express";
import { paymentServices } from "./payment.service";

const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { price } = req.body;

    if (!price) {
      return res.status(400).json({
        success: false,
        message: "Invalid Price Value",
      });
    }

    const clientSecret = await paymentServices.createPaymentIntent(price);

    res.status(200).json({
      success: true,
      message: "Payment Intent created Successfully",
      data: clientSecret,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Payment Intent failed to created!",
    });
  }
};

export const paymentController = {
  createPaymentIntent,
};
