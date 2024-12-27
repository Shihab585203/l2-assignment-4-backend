import QueryBuilder from "../../builder/QueryBuilder";
import { productSearchableFields } from "./product.constant";
import { TProduct } from "./product.interface";
import { Product } from "./product.modal";

const createProductIntoDB = async (payload: TProduct) => {
  const result = Product.create(payload);

  return result;
};

const getAllProductsFromDB = async (
  searchTerm = "",
  category = "",
  page = 1,
  limit = 10
) => {

  const query:  Record<string, any> = {}

  if(searchTerm){
    query.searchTerm = { $regex: searchTerm, $options: 'i' }
  }

  if(category){
    query.category = category
  }

  const skip = (page - 1) * limit;

  const products = await Product.find(query).skip(skip).limit(limit).sort({ createdAt: -1});

  const total = await Product.countDocuments(query);



  // const filter: {[key: string]: any} = {};
  
  // if(query.category){
  //   filter.category = query.category
  // }

  // const productQuery = new QueryBuilder(Product.find(filter), query)
  //   .search(productSearchableFields)
  //   .filter()
  //   .sort()
  //   .paginate()
  //   .fields();

  // const result = await productQuery.modelQuery;

    // Fetch the total count without applying pagination
    // const totalCount = await Product.countDocuments(
    //   new QueryBuilder(Product.find(filter), query).search(productSearchableFields).filter().query
    // );

  return { result: products, total, page, limit, totalPages: Math.ceil(total / limit) };
};

const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });

  return result;
};

const getCategoriesFromDB = async () => {
  const categories = await Product.distinct('category');

  return categories;
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  getCategoriesFromDB
};