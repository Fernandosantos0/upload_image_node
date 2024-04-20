require('dotenv').config();

const mongoose = require('mongoose');
const colors = require('colors');

mongoose.set('strictQuery', true);

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.qmhtxgb.mongodb.net/UPLOAD?retryWrites=true&w=majority&appName=Cluster0`);

    console.log('Conectado com sucesso no banco de dados!'.blue.bold);
}

main()
    .catch(err => console.error(err));

module.exports = main;
