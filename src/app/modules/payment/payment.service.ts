import Stripe from "stripe";
import config from "../../../app/config";
import { TPaymentData } from "./payment.interface";
import { PaymentData } from "./payment.model";
import { ObjectId } from "mongodb";
import { CartProduct } from "../cart/cart.modal";

const stripeSecretKey = config.stripe_secret_key;

if (!stripeSecretKey) {
  throw new Error("Stripe Secret Key is not Defined");
}

const stripe = new Stripe(stripeSecretKey);

const createPaymentData = async (payload: TPaymentData) => {
  const result = PaymentData.create(payload);

  //Delete All Cart Items after Payment successfull
  if (payload.cartIds && payload.cartIds.length > 0) {
    const query = {
      _id: {
        $in: payload.cartIds.map((id) => new ObjectId(id)),
      },
    };
    await CartProduct.deleteMany(query);
  }

  return result;
};

const createPaymentIntent = async (price: number) => {
  const amount = Math.round(price * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return paymentIntent.client_secret;
};

export const paymentServices = { createPaymentData, createPaymentIntent };
