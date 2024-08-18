import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
const app = express();

//Parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/products", ProductRoutes);

const getController = (req: Request, res: Response) => {
  res.send("This server is running Smoothly!");
};

app.get("/", getController);

export default app;
