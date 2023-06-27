const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();
const path = require('path');

const {
    HOST,
    PORT
} = process.env;

const app = express();

app.use(bodyparser.json());

const port = PORT || 3000;
const host = HOST || "localhost";

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, host, () => console.log(`App running on ${host}:${port}...`));