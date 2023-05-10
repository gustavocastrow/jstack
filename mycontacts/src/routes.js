const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contatcs', ContactController.index);
router.get('/contatcs/:id/:email', ContactController.show);

module.exports = router;
