import { Router } from "express";
import { ProductRoutes } from "../modules/product/product.route";
import { paymentRoutes } from "../modules/payment/payment.route";
import { CartProductRoutes } from "../modules/cart/cart.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/create-payment-intent",
    route: paymentRoutes,
  },
  {
    path: "/cart",
    route: CartProductRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
