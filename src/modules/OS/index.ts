import {Request,Response, Router} from 'express';

const OSRouter = Router();

OSRouter.get('/',(req:Request,resp:Response)=>{
    resp.json({msg:"Modulo Os"})
})
export default OSRouter;