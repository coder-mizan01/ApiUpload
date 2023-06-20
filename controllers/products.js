
const model = require('../models/product');

const getAllProducts = async (req,res) => {

res.status(200).json(await model.find(req.query))

}


module.exports = {
  getAllProducts
};