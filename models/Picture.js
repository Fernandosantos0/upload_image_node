const mongoose = require('mongoose');
const { Schema } = mongoose

/* Criando o Schema ou a estrutura do document */
const PictureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

/* Criando o model */
module.exports = mongoose.model('Picture', PictureSchema);
