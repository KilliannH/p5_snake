const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config()

const {
    HOST,
    PORT
} = process.env;

const app = express();

app.use(bodyparser.json());

const port = PORT || 3000;
const host = HOST || "localhost";

app.get('/', (req, res) => {
    res.sendFile("./client/index.html");
});

app.listen(port, host, () => console.log(`App running on ${host}:${port}...`));