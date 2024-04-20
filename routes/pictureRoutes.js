const { Router } = require('express');
const routes = Router();

const upload = require('../config/multerConfig');

/* Importando o controller */
const PictureController = require('../controllers/PictureController');

/* Rotas */
routes.post('/', upload.single('file'), PictureController.create); // Rota de criação
routes.get('/', PictureController.findAll); // Rota para listar todos os dados 
routes.delete('/:id', PictureController.remove); // Rota para remover imagem 

module.exports = routes;
