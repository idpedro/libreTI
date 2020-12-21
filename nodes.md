# Knex Commands

- create knex migrations
  - npx knex migrate:make name

Migration is used to maintain a history of changes

- Run knex migrations
  - npx knex migrate:latest

- Create Seeds
  - npx knex seed:make seed_name

Seed as used to insert basic data intro the database,serve to populate the database.

- Run Seeds
  - npx knex seed:run

- Run migrations and seeds
  - npx knex migrate:latest seed:run
