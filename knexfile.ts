import path from "path";

// Update with your config settings.
export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "src", "Database", "dev.sqlite3"),
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "src", "Database", "migration"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "Database", "seeds"),
    },
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "src", "Database", "db.sqlite3"),
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "src", "Database", "migration"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "Database", "seeds"),
    },
  },
};
