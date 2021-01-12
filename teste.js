import knex from "./src/database";

const test = async () => {
  const users = await knex.select().from("equipament_types");
  return users;
};

test().then((users) => {
  console.log(users);
});
