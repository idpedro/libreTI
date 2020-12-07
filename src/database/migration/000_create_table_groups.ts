import Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('groups',function(table){
        table.increments('id').primary();
        table.text('name').unique().notNullable();
        table.json('permision')
        // todo
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('groups')
}

