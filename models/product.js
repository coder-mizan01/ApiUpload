/*const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);*/
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id:{
    type : Number,
    required : true,
  },
  title: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
  category:{
    type: String,
    required : true,
  },
  brand:{
    type : String,
    required : true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountprice: {
    type: Number,
    required : false,
  },
  rating: {
    type : Number,
    required : true,
  },
  description : {
    type : String,
    required : false,
  },
  featured: {
    type : Boolean,
    default : false,
  },
  createdAt : {
    type : Date,
    default : Date.now(),
  }
})

module.exports = mongoose.model('Product',productSchema);

