import { Request, Response } from "express";
import { paymentServices } from "./payment.service";
import { PaymentDataValidations } from "./payment.validation";

const createPaymentData = async(req: Request, res: Response) => {
  try {
    const payment = req.body;

    const zodParsedData = PaymentDataValidations.CreatePaymentDataValidationSchema.parse(payment)

    const paymentResult = await paymentServices.createPaymentData(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Payment Data Imported Successfully",
      data: paymentResult
    })
  } catch (err){
    res.status(400).json({
      success: false,
      message: "Payment Data Import failed!",
      data: err
    })
  }
}

const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { price } = req.body;
    console.log(price)

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
  createPaymentData,
  createPaymentIntent,
};
