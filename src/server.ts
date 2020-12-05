import dotenv from 'dotenv';
import express, { NextFunction,Request,Response } from 'express';
import mainRouter from '../src/Router';

dotenv.config();
const app = express();


app.use(express.json());
app.use('/',mainRouter);

app.use((str:String,req:Request,resp:Response,next:NextFunction)=>{
    resp.status(resp.statusCode).json(
        {
            message:"Olá, você não devia esta aqui :-<",
            saida:str
    }
    )
})

app.listen(
    Number(process.env.APP_PORT),(process.env.APP_HOST as string),
    ()=>{ console.log(
        `<${process.env.APP_NAME}> Listem ${process.env.APP_HOST}:${process.env.APP_PORT}`
    )});



