
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

const connectDB = require("./DB/Connect");

app.use(cors());

const products_routes = require("./Routes/products");


app.get("/", (req, res) => {
  res.send("Hi, I am live ");
});

app.use('/api/products',products_routes)


const start = async () => {
   await connectDB(process.env.MONGODB_URL)
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();