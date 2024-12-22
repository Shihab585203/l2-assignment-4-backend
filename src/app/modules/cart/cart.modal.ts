import { model, Schema } from "mongoose";
import { TCartProduct } from "./cart.interface";

const CartProductSchema = new Schema<TCartProduct>({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const CartProduct = model<TCartProduct>("CartProduct", CartProductSchema);