import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import mainRouter from "./Router";
import cors from "cors";

const logger = (req: Request, resp: Response, next: NextFunction) => {
  const data = new Date();
  data.getDate;
  console.log(
    `[ LibreTI ] ${data.getDate()}/${
      data.getMonth() + 1
    } - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} ${
      req.method
    } in ${req.url}`
  );
  next();
};

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);
app.use("/", mainRouter);

app.listen(Number(process.env.APP_PORT), process.env.APP_HOST as string, () => {
  console.log(
    `<${process.env.APP_NAME}> Listem ${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
