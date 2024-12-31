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
  limit = 10,
  sort = ""
) => {
  const query: Record<string, any> = {};

  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
    ];
  }

  if (category) {
    query.category = category;
  }

  let sortConfig: Record<string, any> = { createdAt: -1 };

  switch (sort) {
    case "price-asc":
      sortConfig = { price: 1 };
      break;
    case "price-desc":
      sortConfig = { price: -1 };
      break;
    case "brand-desc":
      sortConfig = { brand: -1 };
      break;
    case "rating-desc":
      sortConfig = { sort: -1 };
      break;
    default:
      break;
  }

  const skip = (page - 1) * limit;

  const products = await Product.find(query)
    .skip(skip)
    .limit(limit)
    .sort(sortConfig);

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

  return {
    result: products,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });

  return result;
};

const getCategoriesFromDB = async () => {
  const categories = await Product.distinct("category");

  return categories;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  return result;
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  getCategoriesFromDB,
  deleteProductFromDB
};
