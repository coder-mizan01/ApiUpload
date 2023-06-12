/*
const getAllProducts = async (req,res) =>{   
    res.status(200).json({msg : "This is AllProducts"})
}

module.exports = getAllProducts;
*/

const getallProducts = (req,res) =>{
    res.status(201).json({
        message : "THis is all product"
    })
}

module.exports = getallProducts;