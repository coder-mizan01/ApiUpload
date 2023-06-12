/*
const mongoose = require("mongoose");


const ConnectDB = (uri) => {
 console.log('database is connected');
 return  mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology :true,
  });
};

module.exports= ConnectDB;

*/


const mongoose = require('mongoose');

const ConnectDB = (uri) =>{
  console.log('database is connected');
   return mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology :true,
   });
}

module.exports = ConnectDB;