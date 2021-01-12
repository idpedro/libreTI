import { Request, Response } from "express";

class EquipamentsController {
  static async create(req: Request, resp: Response) {
    resp.json(req.body);
  }
}

export default EquipamentsController;
