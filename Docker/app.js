const express = require('express');
const app = express();

PORT = 8080 || 3000;

app.get('/', (req, res) => {
    res.status(200).send("Hi there i'm using docker 🐳");
});

app.listen(PORT);