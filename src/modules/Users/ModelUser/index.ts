


interface UserInterface{
    name:string,
    role:string,
    email:string,
    idType:number,
    idGroup:number,
    block:boolean,
    id?:Number,
    password?:string,
    create_at?:string,
    update_at?:string
}

class User {

    protected __name:string;
    protected __role:string;
    protected __email:string;
    protected __idType:number;
    protected __idGroup:number;
    protected __block:boolean;
    protected __id?:Number;
    protected __password?:string;
    protected __create_at?:string;
    protected __update_at?:string;

    constructor(user:any){
        this.__name=user?.name;
        this.__role=user?.role;
        this.__email=user?.email;
        this.__idType=user?.idType;
        this.__idGroup=user?.idGroup;
        this.__block=user?.block ;
        this.__id=user?.id;
        this.__password=user?.password;
        this.__create_at=user?.__create_at;
        this.__update_at=user?.__update_at;

    }
}

export default User;
export {UserInterface};
