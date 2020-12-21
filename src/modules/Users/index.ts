import {Router} from 'express';
import ControllerUsers from './ControllerUsers';

const moduleUsers = Router();

moduleUsers.get('/',ControllerUsers.getAll);
moduleUsers.get('/:id',ControllerUsers.getById);
moduleUsers.post('/',ControllerUsers.insert);

export default moduleUsers;