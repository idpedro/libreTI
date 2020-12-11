import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_types',function(table){
        table.increments('id').primary();
        table.text('name').unique().notNullable();
        table.text('description').notNullable();
        table.boolean('isAdmin').defaultTo(false);
        table.boolean('isSuper').defaultTo(false);
        table.boolean('globalView').defaultTo(false);
        
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_types');
}

