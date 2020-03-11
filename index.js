const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const groceryRoutes = require('./api/routes/groceries');
const config = require('./config.json');
//const coors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

mongoose.connect(
    `mongodb://${config.mongoDb.user}:${encodeURIComponent(config.mongoDb.pass)}${config.mongoDb.connectionString}`, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors);

app.use('/api/groceries', groceryRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`))