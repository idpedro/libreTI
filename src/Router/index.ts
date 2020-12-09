import {Router,Request,Response, NextFunction} from 'express';
import moduleRouter from '../modules';


const mainRouter = Router();

mainRouter.use(moduleRouter);


mainRouter.get('/',async(req:Request,resp:Response)=>{
    resp.send("ok");
})




export default mainRouter;


