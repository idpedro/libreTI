import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_types',function(table){
        table.increments('id').primary();
        table.text('name').unique().notNullable();
        table.text('descption').notNullable();
        table.boolean('isAdmin').defaultTo(false).notNullable();
        table.boolean('isSuper').defaultTo(false).notNullable();
        table.text('modules').notNullable().defaultTo((process.env.APP_EXTERNAL_MODULES as string));
        
    });
}


export async function down(knex: Knex): Promise<void> {
}

