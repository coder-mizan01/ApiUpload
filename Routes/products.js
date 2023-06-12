/*
const express = require('express');

const router = express.Router();

const getAllProducts = require('../Controllers/controller')

router.route('/').get(getAllProducts);

module.exports = router;


*/

const express = require('express');
const Router = express.Router();

const getallProducts = require('../Controllers/controller');

Router.get('/',getallProducts);

module.exports = Router;