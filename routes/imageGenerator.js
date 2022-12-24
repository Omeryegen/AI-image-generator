const express = require('express');
const {imageGen} = require('../controllers/imageGen')
const imageGenerator = express.Router();


imageGenerator.get('/', (req,res) =>{
    res.render('imageGenerator');
});

imageGenerator.post('/', imageGen);
module.exports = imageGenerator;