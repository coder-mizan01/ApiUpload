/*require('dotenv').config()

const express = require('express');
const app = express();
const ConnectDB = require('./DB/Connect')
const PORT = process.env.PORT || 4000;

const product_routes = require('./Routes/products')


app.use('/api/products',product_routes);

app.get('/',(req,res)=>{
     res.sendFile(__dirname + '/index.html');
})

const Start = async() =>{
    try{
        await ConnectDB(process.env.MONGODB_URL)
        app.listen(PORT ,(req,res)=>{
            console.log(`server is running on ${PORT}`);
        })
    }catch(err){
        console.log(err);
    }
}

Start()

*/


require('dotenv').config();
const express = require('express');
const app = express();
const ConnectDB = require('./DB/Connect');

const Product_Router = require('./Routes/products');
const PORT = process.env.PORT || 4000;

ConnectDB(process.env.MONGODB_URL);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.use('/api/products',Product_Router);

app.listen(PORT,(req,res)=>{
    console.log(`server is running at ${PORT} PORT`);
})

