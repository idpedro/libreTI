import dotenv from 'dotenv';
import express from 'express';
import mainRouter from './router';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/',mainRouter);

app.listen(
    Number(process.env.APP_PORT),(process.env.APP_HOST as string),
    ()=>{ console.log(
        `<${process.env.APP_NAME}> Listem ${process.env.APP_HOST}:${process.env.APP_PORT}`
    )});
