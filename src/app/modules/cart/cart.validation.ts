import { z } from "zod";

const StoreCartProductValidationSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
  quantity: z.number(),
});

export const CartProductValidation = {
    StoreCartProductValidationSchema
}