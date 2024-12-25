import { model, Schema } from "mongoose";
import { TPaymentData } from "./payment.interface";

const PaymentDataSchema = new Schema<TPaymentData>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  cartIds: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "failed"],
  },
});

export const PaymentData = model<TPaymentData>(
  "PaymentData",
  PaymentDataSchema
);