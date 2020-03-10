const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const coors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors);

app.get('/api/chicken', (req, res) => {
    res.send("Bawk bawk");
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`))