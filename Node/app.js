require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

var jsonServer = require('json-server');

const PORT = process.env.PORT || 8080;

const mainRouter = require('./routes/main');

app.use(express.json());
//app.use('/api', jsonServer.router('db.json'));
app.use('/api/v1/main', mainRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
