const express = require('express');

const app = express();

const PORT = 4000;

app.get('/',(req,res)=>{
     res.send('hello')
})

app.listen(PORT ,(req,res)=>{
    console.log(`server is running on ${PORT}`);
})