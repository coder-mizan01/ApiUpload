const express = require('express');

const app = express();

const PORT = 4000;

app.get('/',(req,res)=>{
     res.sendFile(__dirname + '/index.html');
})

app.get('/Products',(req,res)=>{
    res.sendFile(__dirname+'/products.js')
})

app.listen(PORT ,(req,res)=>{
    console.log(`server is running on ${PORT}`);
})