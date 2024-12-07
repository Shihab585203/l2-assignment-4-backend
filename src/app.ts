import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
const app = express();

//Parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/", router);

const getController = (req: Request, res: Response) => {
  res.send("This server is running Smoothly!");
};

app.get("/", getController);

export default app;