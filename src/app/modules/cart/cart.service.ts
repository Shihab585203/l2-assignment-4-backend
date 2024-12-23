import { TCartProduct } from "./cart.interface";
import { CartProduct } from "./cart.modal";

const storeProductCartIntoDB = async (payload: TCartProduct) => {
  const result = CartProduct.create(payload);

  return result;
};

const deleteProductCartFromDB = async (id: string) => {
  try {
    const deleteProductCart = await CartProduct.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true }
    );
    if (deleteProductCart) {
      throw new Error("Failed to Delete Cart Product");
    }

    return deleteProductCart;
  } catch (err) {
    throw new Error("Failed to Delete Cart Product Data!");
  }
};

export const CartProductServices = {
  storeProductCartIntoDB,
  deleteProductCartFromDB
};
