import Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("branches").del();

  // Inserts seed entries
  await knex("branches").insert([
    {
      name: "Matriz",
      address: "Rua exemplo 42,bairro exemplo",
      city: "Progamopolis",
      description: "",
    },
  ]);
}
