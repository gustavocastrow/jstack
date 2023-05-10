/* eslint-disable import/no-extraneous-dependencies */
const { v4 } = require('uuid');

const contatcs = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@gmail.com',
    phone: '12981141232',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'jose@gmail.com',
    phone: '128483292',
    category_id: v4(),
  },
];

class ContactsRepository {
  // Implementando métodos no repository
  findAll() {
    return new Promise((resolve) => {
      resolve(contatcs);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contatcs.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
