interface EquipamentProps {
  _id?: number;
  _name: string;
  _type: string;
  _description: string;
  _hardware_info?: JSON;
  _branch?: number;
  _patrimony_number?: number;
}

class Equipament implements EquipamentProps {
  _id?: number | undefined;
  _name: string;
  _type: string;
  _description: string;
  _branch?: number;
  _patrimony_number?: number | undefined;
  _hardware_info?: JSON;

  constructor(
    name: string,
    type: string,
    description: string,
    branch?: number,
    id?: number,
    patrimony_number?: number,
    hardware_info?: JSON
  ) {
    id && (this._id = id);
    patrimony_number && (this._patrimony_number = patrimony_number);
    branch && (this._branch = branch);
    hardware_info && (this._hardware_info = hardware_info);

    this._name = name;
    this._type = type;
    this._description = description;
  }
  set name(name: string) {
    this.name = name;
  }
  get name(): string {
    return "" + this.name;
  }
}

export default Equipament;
