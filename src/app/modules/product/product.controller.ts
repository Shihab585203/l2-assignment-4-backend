import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidations } from "./product.validation";

//Post a Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const zodParsedData =
      ProductValidations.createProductValidationSchema.parse(product);

    const result = await ProductServices.createProductIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get All Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB(req.query);

    res.status(200).json({
      success: true,
      message: "Products are retrieve Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get Single Product
const getSingleProduct = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;

    const result = await ProductServices.getSingleProductsFromDB(id);

    res.status(200).json({
      success: true,
      message: "Product is retrieve Successfully",
      data: result,
    });

  } catch (error) {
    console.log(error);
  }
}

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct
};
