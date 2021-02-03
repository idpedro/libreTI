import knex from "../../Database";
import bcrypt from "bcrypt";

interface UserProps {
  name: string;
  role: string;
  email: string;
  idType: number;
  idGroup: number;
  block: boolean;
  id?: Number;
  password?: string;
  create_at?: string;
  update_at?: string;
}

class UsersDao {
  public static async getAll() {
    try {
      const users = await knex("users").select("*");
      return users.map((user) => ({ ...user, password: undefined }));
    } catch (error) {
      throw new Error(`Erro ao listar usuarios: ${error.message}`);
    }
  }

  public static async getById(id: Number) {
    const userFound = await knex("users").select("*").where({ id: id });
    if (userFound.length > 0) {
      const [user] = userFound;
      return { ...user, password: undefined };
    }
    throw new Error("User Not Found");
  }

  public static async getUserByEmail(email: string) {
    try {
      const [user]: UserProps[] | any[] = await knex("users")
        .select("id", "name", "role", "idType", "password")
        .where("email", "=", email);
      return user;
    } catch (error) {
      throw Error("Error on database");
    }
  }

  public static async insert(userReq: UserProps) {
    console.log(userReq);
    try {
      const passHash = await bcrypt.hash(
        userReq?.password as string,
        Number(process.env.HASH_COST)
      );
      const userId = await knex("users").insert([
        { ...userReq, password: passHash },
      ]);
      console.log(`user = ${userId}`);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default UsersDao;
