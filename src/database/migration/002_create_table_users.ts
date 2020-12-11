import  Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users',function(table){
        table.increments('id').primary();
        table.text('name').unique().notNullable();
        table.text('role').notNullable();
        table.text('email').unique().notNullable();
        table.text('password').notNullable();

        // Foreing key from user types table
        table.integer('idType').defaultTo('3')
        .index().references('id').inTable('user_types');
        // Foreing key from groups table
        table.integer('idGroup').unsigned().notNullable()
        .index().references('id').inTable('groups');
        // Foreing key from branchs table
        // table.integer('idBranch').unsigned().notNullable()
        // .index().references('id').inTable('branchs');        
        
        table.boolean('block').defaultTo(false);
        // Log Fild
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }); 

}


export async function down(knex: Knex): Promise<void> { return knex.schema.dropTable('users'); }

