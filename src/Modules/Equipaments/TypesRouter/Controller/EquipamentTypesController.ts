import { Request, Response } from "express";
import Knex from "../../../../Database";
import EquipamentType, {
  InterfaceEquipamentType,
} from "../Models/EquipamentType";
class EquipamentTypesController {
  static async getAll(req: Request, resp: Response) {
    if (req.query?.allinfo) {
      const equipament_types = await Knex.select("*").from("equipament_types");
      resp.json(equipament_types);
    } else {
      const equipament_types = await Knex.select("id", "name").from(
        "equipament_types"
      );
      resp.json(equipament_types);
    }
  }

  static async getById(req: Request, resp: Response) {
    const { id } = req.params;
    if (!isNaN(id as any)) {
      const equipament_type = await Knex.select("*")
        .from("equipament_types")
        .where("id", "=", Number(id));
      resp.json(equipament_type);
    } else resp.status(404).json();
  }
  static async update(req: Request, resp: Response) {
    const { id } = req.params;
    const { name } = req.body;
    if (id && name && !isNaN(Number(id))) {
      try {
        const updatedType = await Knex("equipament_types")
          .where({ id })
          .update({ name, update_at: Knex.fn.now() });
        if (updatedType > 0) {
          resp.json({ success: true });
        } else {
          resp.json({ success: false, msg: "Tipo não atualizado" });
        }
      } catch (error) {
        resp.json({ success: false, msg: error.message });
      }
    }
  }
  static async insert(req: Request, resp: Response) {
    const type = req.body;
    if (
      type.name &&
      type.name.length < 64 &&
      type.name.length >= 2 &&
      isNaN(type.name)
    ) {
      const newType = new EquipamentType({ name: type.name });
      try {
        const [id] = await Knex("equipament_types").insert(newType.json);
        newType.id = id;
        resp.json(newType.json);
      } catch (error) {
        console.log(error);
        resp.json({
          error: "Tipo de Equipamento invalido, verifique os parametros",
        });
      }
    } else resp.json({ error: "invalid Argument" });
  }
}

export default EquipamentTypesController;
