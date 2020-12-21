import {Response} from 'express';

export default {

    isNumber:(argument:any,resp:Response)=>{
        if(isNaN((argument as any))) resp.status(400).json({mensage:'Invalid Argument'})
        return true;
    }

}