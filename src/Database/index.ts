import knexfile from '../../knexfile';
import Knex from 'knex';

const knex = Knex(knexfile.development);

export default knex;