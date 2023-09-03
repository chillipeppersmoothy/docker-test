const { getAllItems, postItem } = require('../controllers/main');
const express= require('express');
const router = express.Router();

router.route('/').get(getAllItems).post(postItem);

module.exports = router;