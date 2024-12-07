import { Request, Response } from "express";
import { paymentServices } from "./payment.service";

const createPaymenIntent = async (req: Request, res: Response) => {
  try {
    const { price } = req.body;

    if (!price) {
      return res.status(400).json({
        success: false,
        message: "Invalid Price Value",
      });
    }

    const clientSecret = paymentServices.createPaymentIntent(price)

    res.status(200).json({
        
    })

  } catch (error) {

  }
};
