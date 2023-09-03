const { StatusCodes } = require('http-status-codes');
const throwError = require('../errors/throwError');
const fs = require('fs');
const { splitValue } = require('../middleware/filepath');
const { v4: uuidv4 } = require('uuid');

const value = splitValue();
let jsonData = [];

class InputData {
    constructor(id,name,isCompleted) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }
} 

fs.readFile(value[0] + "/" + "db.json", 'utf8', (err, data) => {
    if (err) {
        new throwError(err);
    }
    jsonData.push(data);
});

const getAllItems = async (req, res) => {
    res.status(StatusCodes.OK).json(JSON.parse(jsonData));
}

const postItem = async (req, res) => {
    const data = new InputData(uuidv4(),req.body.name,false);
    jsonData.push(data);
    fs.writeFile(value[0] + "/" + "db.json", JSON.stringify(jsonData), async err => {
        if (err) {
            new throwError(err);
        }
        res.status(StatusCodes.CREATED).json(JSON.parse(data.data));
    });    
}

module.exports = { getAllItems, postItem }