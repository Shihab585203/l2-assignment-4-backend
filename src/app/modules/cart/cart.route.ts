import express from 'express';
import { CartProductController } from './cart.controller';

const router = express.Router();

router.post('/post-cart-product', CartProductController.StoreCartProduct);

router.get('/', CartProductController.getAllProductCartData);

router.delete('/delete-cart-product/:id', CartProductController.deleteProductCart);

export const CartProductRoutes = router;