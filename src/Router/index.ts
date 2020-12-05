import {Router,Request,Response, NextFunction} from 'express';


const mainRouter = Router();

mainRouter.get('/',async(req:Request,resp:Response,next:NextFunction)=>{
    resp.status(403)
    next("Nono");
})

export default mainRouter;


