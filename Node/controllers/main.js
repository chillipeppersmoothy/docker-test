const { StatusCodes } = require('http-status-codes');
const throwError = require('../errors/throwError');
const fs = require('fs');
const { splitValue } = require('../middleware/filepath');

const value = splitValue();
let jsonData;

fs.readFile(value[0] + "/" + "db.json", 'utf8', (err, data) => {
    if (err) {
        new throwError(err);
    }
    jsonData = data;
});

const getAllItems = async (req, res) => {
    res.status(StatusCodes.OK).json(JSON.parse(jsonData));
}

const postItem = async (req, res) => {
    const data = req.body;
    fs.writeFileSync(value[0] + "/" + "db.json", JSON.stringify(data), err => {
        if (err) {
            new throwError(err);
            res.status(StatusCodes.CREATED).json(JSON.parse(jsonData));
        }
    });    
}

module.exports = { getAllItems, postItem }