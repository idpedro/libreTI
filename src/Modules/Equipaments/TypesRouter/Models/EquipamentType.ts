import EquipamentTypesController from "../Controller/EquipamentTypesController";

interface InterfaceEquipamentType {
  id?: number;
  name: string;
}
class EquipamentType {
  #id?: number;
  #name: string;
  constructor(type: InterfaceEquipamentType) {
    type.id && (this.#id = type.id);
    this.#name = type.name;
  }
  get name() {
    return "" + this.#name;
  }
  set name(newName: string) {
    this.name = newName;
  }
  get id() {
    return Number(this.#id);
  }
  set id(id: number) {
    this.#id = id;
  }
  get json() {
    const toJson: { [key: string]: any } = {};
    if (this.id) {
      toJson["id"] = this.id;
    }
    return { ...toJson, name: this.name };
  }
}

export default EquipamentType;
export { InterfaceEquipamentType };
