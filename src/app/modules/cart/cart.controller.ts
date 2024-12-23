import { Request, Response } from "express";
import { CartProductValidation } from "./cart.validation";
import { CartProductServices } from "./cart.service";

const StoreCartProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const zodParsedData =
      CartProductValidation.StoreCartProductValidationSchema.parse(product);

    const result = await CartProductServices.storeProductCartIntoDB(
      zodParsedData
    );

    res.status(200).json({
      success: true,
      message: "Store Cart Product Data Successfully.",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Cart Product Storing Failed!",
      data: err
    });
  }
};

const deleteProductCart = async (req: Request, res: Response) => {
try {
  
  const { id } = req.params;

  const result = await CartProductServices.deleteProductCartFromDB(id);

  res.status(200).json({
    success: true,
    message: 'Delete Cart Product Data Successfully',
    data: result
  })
} catch (err) {
  res.status(400).json({
    success: false,
    message: 'Failed to delete Cart Product Data',
    data: err
  })
}


}


export const CartProductController = {
    StoreCartProduct
}