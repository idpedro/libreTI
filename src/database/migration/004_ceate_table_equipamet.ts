import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("equipaments", function (table) {
    table.increments("id").primary();
    table.text("name").unique().notNullable();
    table.text("descriptionme").notNullable();
    table.integer("patrimony_number").unique().notNullable();

    table
      .integer("idType")
      .index()
      .references("id")
      .inTable("equipament_types");
    // Log Fild
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("equipaments");
}
