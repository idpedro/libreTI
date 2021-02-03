import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import mainRouter from "./Router";
import cors from "cors";
import Logger from "./Helper/Logger";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(Logger.request);

app.use(mainRouter);

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.status(401);
  next({ code: 404, message: "Not Found" });
});
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  Logger.log(err);
  res.status(err.code).json({ success: false, message: err.message });
});

app.listen(Number(process.env.APP_PORT), process.env.APP_HOST as string, () => {
  console.log(
    `<${process.env.APP_NAME}> Listem ${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
