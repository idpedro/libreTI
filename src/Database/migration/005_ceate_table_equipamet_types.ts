import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("equipament_types", function (table) {
    table.increments("id").primary();
    table.text("name").unique().notNullable();

    // Log Fild
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("equipament_types");
}
