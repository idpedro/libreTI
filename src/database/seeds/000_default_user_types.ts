import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('user_types').del();

    
    await knex('user_types').insert([
        {
            name:'Super Administrator',
            description:'Have all permission in any module or user',
            isAdmin:true,
            isSuper:true,
            globalView:true
        },
        {
            name:'Administrator',
            description:'Have all permission in any module or user, but cannot delete',
            isAdmin:true,
            isSuper:false,
        },
        {
            name:'Client',
            description:`is allowed to according to the purpose of each module, cannot delete and does not have access to the administrative menus.`,
            isAdmin:true,
            isSuper:false,
        }
    ]);
}