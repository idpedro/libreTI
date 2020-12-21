import { Request ,response,Response} from 'express';
import DaoUsers from '../DaoUsers';
import TypeCheck from '../../../Helper/TypeCheck';



class UsersController{

    public static async getAll(req:Request ,resp:Response){
        const users = await DaoUsers.getAll();
        resp.json(users);
    }
    public static async getById(req:Request,resp:Response){
        console.log('<Get user by id>')
        const {id} = req.params;
        if(TypeCheck.isNumber(id,resp)){
            try{
                const user = await DaoUsers.getById(Number(id));
                resp.json(user);
            }catch(error){
                resp.status(404).json({message:error.message})
            }
        }
    }
    public static insert(req:Request,resp:Response) {
       resp.json(req.body);
       
        
    }
    

}


export default UsersController;