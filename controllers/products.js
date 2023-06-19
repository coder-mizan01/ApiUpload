
const model = require('../models/product');

const getAllProducts = async (req,res) => {

/*
const {id,brand,title,featured,sort} = req.query;

  const queryObject = {};
  if(brand){
      queryObject.brand = brand;
  }
  if(title){
    queryObject.title = title;
}
  if(featured){
    queryObject.featured = featured;
}

if(id){
  queryObject.id = id;
}

let apiData = model.find(queryObject)

if(sort){
  let sortFix = sort.replace(',',' ');
   apiData.sort(sortFix);
}

const Products =   await model.find(req.query);
res.status(200).json({Products})*/

try {
  const { id } = req.params;
  let products;
  
  if (id) {
    products = await model.findById(id);

  } else {
    products = await model.find(req.query);
  }
  res.status(200).json({ products });

} catch (error) {
  res.status(500).json({ error: error.message });
}

}


module.exports = {
  getAllProducts
};