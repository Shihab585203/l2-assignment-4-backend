import Stripe from "stripe";
import config from "../../../app/config";

const stripeSecretKey = config.stripe_secret_key;

if (!stripeSecretKey) {
  throw new Error("Stripe Secret Key is not Defined");
}

const stripe = new Stripe(stripeSecretKey);

const createPaymentIntent = async (price: number) => {
  const amount = Math.round(price * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return paymentIntent.client_secret;
};

export const paymentServices = { createPaymentIntent };
