import path from 'path';

// Update with your config settings.
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename:path.join(__dirname,"src","database","dev.sqlite3")
    },
    useNullAsDefault:true,
    migrations: {
      tableName: 'knex_migrations',
      directory:path.join(__dirname,"src","database","migration")
    },
    seeds:{
      directory:path.join(__dirname,"src","database","seeds")
    }
  },
  production: {
    client: 'sqlite3',
    connection: {
      filename:path.join(__dirname,"src","database","db.sqlite3")
    },
    useNullAsDefault:true,
    migrations: {
      tableName: 'knex_migrations',
      directory:path.join(__dirname,"src","database","migration")
    },
    seeds:{
      directory:path.join(__dirname,"src","database","seeds")
    }
  }

}