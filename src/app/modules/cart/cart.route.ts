import express from 'express';
import { CartProductController } from './cart.controller';

const router = express.Router();

router.post('/post-cart-product', CartProductController.StoreCartProduct)

export const CartProductRoutes = router;