require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const routes = require('./routes/pictureRoutes');

const app = express();

/* Importando a conexão com o banco de dados */
require('./db');

/* Tratamento do envio de dados pelo body da página */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Middleware de rotas */
app.use('/pictures', routes);

/* Subindo o servidor */
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
 console.log(`Server ON - http://${host}:${port}`.green.bold)
});
