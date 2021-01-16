import { Request, Response } from "express";
import Knex from "../../../Database";
import Equipament, { InterfaceEquipament } from "../Models/Equipament";
import TypeCheck from "../../../Helper/TypeCheck";

class EquipamentsController {
  static async getAll(req: Request, resp: Response) {
    try {
      const equipaments = await Knex("equipaments")
        .select("equipaments.*", "equipament_types.name as type")
        .innerJoin(
          "equipament_types",
          "equipaments.idType",
          "=",
          "equipament_types.id"
        );
      equipaments.map((equipament) => {
        equipament.hardware_info = JSON.parse(equipament.hardware_info);
        return equipament;
      });

      resp.json({ success: true, equipaments });
    } catch (error) {
      resp.status(500).json({ success: false, error });
    }
  }
  static async getById(req: Request, resp: Response) {
    try {
      if (TypeCheck.isInteger(req.params.id)) {
        const equipaments = await Knex("equipaments")
          .select("equipaments.*", "equipament_types.name as type")
          .innerJoin(
            "equipament_types",
            "equipaments.idType",
            "=",
            "equipament_types.id"
          )
          .where("equipaments.id", "=", Number(req.params.id));
        equipaments.map((equipament) => {
          equipament.hardware_info = JSON.parse(equipament.hardware_info);
          return equipament;
        });
        resp.json({ success: true, equipaments });
      } else throw new Error("Invalid Argument");
    } catch (error) {
      resp.status(500).json({ success: false, error });
    }
  }
  static async inset(req: Request, resp: Response) {
    const equipament = new Equipament(req.body);
    try {
      const [id] = await Knex("equipaments").insert(equipament.prepare);
      equipament.id = id;
      resp.json(equipament.prepare);
    } catch (error) {
      resp.status(500).json({ success: false, msg: error.message });
    }
  }
}

export default EquipamentsController;
