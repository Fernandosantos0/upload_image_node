const multer = require('multer');
const fs = require('fs');
const path = require('path');

const aleatorio = () => Math.floor(Math.random() * 100000);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        if(!fs.existsSync(path.join(__dirname, '..', 'uploads'))) 
            fs.mkdirSync(path.join(__dirname, '..', 'uploads'));

        cb(null, path.join('uploads'));
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_${aleatorio()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
