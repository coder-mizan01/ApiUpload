
const model = require('../models/product');

const getAllProducts = async (req,res) => {

const Products =   await model.find(req.query);
res.status(200).json(Products)


}


module.exports = {
  getAllProducts
};