import Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("equipament_types").del();

  // Inserts seed entries
  await knex("equipament_types").insert([
    {
      name: "Computadores",
    },
    {
      name: "Tonner",
    },
    {
      name: "Impressora",
    },
    {
      name: "Tablets",
    },
    {
      name: "SmartPhones",
    },
  ]);
}
