require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const mainRouter = require('./routes/main');

app.use(express.json());

app.use('api/v1/main', mainRouter);