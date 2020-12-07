import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { 
            name: "Administrador",
            role:'Supevisor de TI',
            email:'sysadmin@localhost',
            password:'123@pass',
            idGroup:'1',
            idBranch:"1"
        }
    ]);
};
