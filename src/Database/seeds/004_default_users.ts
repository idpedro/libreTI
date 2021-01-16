import Knex from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      name: "Administrador",
      role: "Supevisor de TI",
      email: "sysadmin@localhost",
      password: bcrypt.hash("123@pass", Number(process.env.HASH_COST)),
      idType: "1",
      idGroup: "1",
      block: false,
    },
  ]);
}
