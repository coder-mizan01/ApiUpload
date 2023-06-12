/*const mongoose = require("mongoose");

const Products_Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type : Boolean,
    default : false,
  },
  rating: {
    type : Number,
    default : 4.9,
  },
  brand: {
    type : String,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now(),
  }
});


module.exports = mongoose.model('Product',Products_Schema);

*/

const mongoose = require('mongoose');

const Products_Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type : Boolean,
    default : false,
  },
  rating: {
    type : Number,
    default : 4.9,
  },
  brand: {
    type : String,
    required : true,
  },
  createdAt : {
    type : Date,
    default : Date.now(),
  }
})

module.exports = mongoose.model('Product', Products_Schema )