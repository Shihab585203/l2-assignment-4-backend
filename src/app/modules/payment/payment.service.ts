const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (price: number) => {
  const amount = Math.round(price * 100);

  const paymentIntent = await stripe.paymentIntes.create({
    amount,
    currency: "usd",
    payment_method_type: ["card"],
  });

  return paymentIntent.client_secret;
};

export const paymentServices = { createPaymentIntent };
