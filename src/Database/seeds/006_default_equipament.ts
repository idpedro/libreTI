import Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("equipaments").del();

  // Inserts seed entries
  await knex("equipaments").insert([
    {
      name: "Computador Exemplo",
      description: "exemplo de equipamento",
      patrimony_number: 1,
      idType: 1,
      hardware_info: JSON.stringify({
        Tamanho_Memoria: "DDR3",
      }),
    },
  ]);
}
