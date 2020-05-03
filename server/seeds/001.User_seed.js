exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
      .then(() => {
        return knex('users').del();
      })
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([                     // password
          { username: 'admin', first_name: '', password: '$2b$10$Xa6gIk7nyobJJrX9oJeTdeBHnKGercF.RJ/UCTM27HMLuU3hY3QUK'  }, 
          { username: 'poweruser', password: '$2b$10$Xa6gIk7nyobJJrX9oJeTdeBHnKGercF.RJ/UCTM27HMLuU3hY3QUK'  }, 
        ]);
      }).then((userId) => {
        return knex('addresses').insert([
          { user_id: userId[0], address_1: "Something street 12" }
        ]);
      });
};
// user username is the same as email