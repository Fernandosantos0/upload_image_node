const Picture = require('../models/Picture');
const fs = require('fs');
const path = require('path');

exports.create = async function(req, res, next) {

    try {
        const { name } = req.body;
        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path
        });

        await picture.save();

        return res.status(201).json({
            picture,
            message: 'Imagem salva'
        })
    } catch(err) {
        return res.status(500).json({
            message: 'Erro ao salvar a imagem'
        });
    }
    
};

exports.findAll = async function(req, res, next) {

    try {
        const pictures = await Picture.find();

        res.status(200).json(pictures);
    } catch(err) {
        return res.status(500).json({
            message: 'Erro ao buscar imagens'
        });
    }

};

exports.remove = async function(req, res, next) {

    try {
        const picture = await Picture.findOne({ _id: req.params.id });

        if(!picture) {
            return res.status(404).json({
                message: 'Imagem não encontrada'
            });
        }

        if(fs.existsSync(path.join(__dirname, '..', picture.src))) {
            fs.unlinkSync(path.join(__dirname, '..', picture.src));
        }
        
        await Picture.findByIdAndRemove({ _id: req.params.id });

        res.status(200).json({
            message: 'Imagem removida com sucesso'
        });

    } catch(err) {
        return res.status(500).json({
            message: 'Erro ao excluir imagens'
        });
    }

}
