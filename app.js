const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authModule = require('./modules/auth/auth.module');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authModule.initRouter());
app.get('/', (req, res) => {
    res.json({ message: 'Route /' });
});

module.exports = app;