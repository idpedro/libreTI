import knex from "../../Database";
import User, { UserInterface } from "../../Model/Users/ModelUser";

class UsersDao {
  public static async getAll() {
    try {
      const users = await knex("users").select("*");
      users.map((user) => this.removePassword(user));
      return users;
    } catch (error) {
      throw new Error(`Erro ao listar usuarios: ${error.message}`);
    }
  }

  public static async getById(id: Number) {
    const userFound = await knex("users").select("*").where({ id: id });
    if (userFound.length > 0) {
      const [user] = userFound;
      return this.removePassword(user as UserInterface);
    }
    throw new Error("User Not Found");
  }

  public static async insert(userReq: any) {
    try {
      const user = new User(userReq);
      return user;
    } catch (error) {}
  }

  private static removePassword(user: UserInterface) {
    delete user?.password;
    return user;
  }
}

export default UsersDao;
