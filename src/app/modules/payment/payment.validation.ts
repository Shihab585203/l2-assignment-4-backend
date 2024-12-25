import { z } from "zod";

const CreatePaymentDataValidationSchema = z.object({
    name: z.string(),
  email: z.string().email(), 
  price: z.number().positive(), 
  phone: z.string().min(10).max(15), 
  transactionId: z.string(),
  date: z.date(),
  cartIds: z.array(z.string()),
  status: z.enum(["pending", "completed", "failed"]),
})

export const PaymentDataValidations = {
    CreatePaymentDataValidationSchema
}