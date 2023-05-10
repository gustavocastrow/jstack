const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Métodos
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obeter UM registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ message: 'User not found' });
    }
    response.json(contact);
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um novo registro
  }

  delete() {
    // Deletar novo registro
  }
}

// Singleton: só podemos ter uma estância do objeto na nossa aplicação
module.exports = new ContactController();
