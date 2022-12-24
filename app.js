const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const ejs = require('ejs');
const app = express();


app.set('view engine', 'ejs');  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

app.use(require('./routes/imageGenerator'));


app.listen(port, function(){
    console.log('listening');
});
