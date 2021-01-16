import TypeCheck from "../../../Helper/TypeCheck";
interface EquipamentProps {
  _id?: number;
  _name: string;
  _idType: number;
  _type?: string;
  _description: string;
  _hardware_info?: any;
  _branch?: number;
  _patrimony_number?: number;
}

interface InterfaceEquipament {
  id?: number;
  name: string;
  idType: number;
  type?: string;
  description: string;
  hardware_info?: JSON;
  idBranch?: number;
  patrimony_number?: number;
}
class Equipament implements EquipamentProps {
  _id?: number | undefined;
  _name: string;
  _idType: number;
  _description: string;
  _type?: string;
  _idBranch?: number;
  _patrimony_number?: number | undefined;
  _hardware_info?: JSON;

  constructor(equipament: InterfaceEquipament) {
    equipament?.id && (this._id = equipament?.id);

    equipament.patrimony_number &&
      (this._patrimony_number = equipament.patrimony_number);

    equipament.idBranch && (this._idBranch = equipament.idBranch);

    equipament.hardware_info &&
      (this._hardware_info = equipament.hardware_info);
    equipament.type && (this._type = equipament.type);

    this._name = equipament.name;
    this._idType = equipament.idType;
    this._description = equipament.description;
  }

  set id(newId: number) {
    if (!isNaN(newId) && TypeCheck.isInteger(newId)) {
      this._id = newId;
      return;
    }
    throw new TypeError("Equipament id must be integer");
  }

  get id() {
    return Number(this._id);
  }
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return "" + this.name;
  }

  set idType(newType: number) {
    if (TypeCheck.isInteger(newType)) {
      this._idType = newType;
      return;
    }
    throw new TypeError("Equipament type must be integer");
  }
  get idType() {
    return Number(this._idType);
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get description() {
    return "" + this._description;
  }
  get type() {
    return this._type;
  }

  set idBranch(newidBranch: number) {
    if (TypeCheck.isInteger(newidBranch)) {
      this._idBranch = newidBranch;
      return;
    }
    throw new TypeError("Equipament idBranch must be integer");
  }
  get idBranch() {
    return Number(this._idBranch);
  }

  set patrimony_number(newPatrimonyNumber: number) {
    if (TypeCheck.isInteger(newPatrimonyNumber)) {
      this._patrimony_number = newPatrimonyNumber;
    }
    throw new TypeError("Equipament patrimony number must be integer");
  }
  get patrimony_number() {
    return Number(this._patrimony_number);
  }
  get hardware_info() {
    if (this._hardware_info) return this._hardware_info;
    return JSON.parse("");
  }
  set hardware_info(newHardware_info: JSON) {
    this._hardware_info = newHardware_info;
  }
  get prepare() {
    const tojson: { [key: string]: any } = {};
    this._id && (tojson["id"] = this._id);
    this._idBranch && (tojson["idBranch"] = this._idBranch);

    this._patrimony_number &&
      (tojson["patrimony_number"] = this._patrimony_number);
    console.log(this._hardware_info);
    this._hardware_info &&
      (tojson["hardware_info"] = JSON.stringify(this._hardware_info));

    return {
      ...tojson,
      name: this._name,
      idType: this.idType,
      description: this.description,
    };
  }
}

export default Equipament;

export { InterfaceEquipament };
