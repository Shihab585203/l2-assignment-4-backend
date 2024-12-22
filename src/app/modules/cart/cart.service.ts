import { TCartProduct } from "./cart.interface";
import { CartProduct } from "./cart.modal";

const storeProductCartIntoDB = async (payload: TCartProduct) => {
  const result = CartProduct.create(payload);

  return result;
};

export const CartProductServices = {
  storeProductCartIntoDB,
};
