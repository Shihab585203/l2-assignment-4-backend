import { z } from "zod";

const createProductValidationSchema = z.object({
  title: z.string(),
  category: z.string(),
  stockQuantity: z.number(),
  brand: z.string(),
  rating: z.number(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
});

export const ProductValidations = {
  createProductValidationSchema,
};
