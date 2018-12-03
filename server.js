const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items')
const app = express();

//Bodyparser middleware
app.use(bodyParser.json());
//DB config mlab
//const db = require('').mongoURI;

mongoose
    .connect('mongodb://localhost:27017/thal')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
//use routes
app.use('/api/items', items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ${port}'));

