const express= require('express');
const { formRouter } = require('./routes/form');
const cors= require('cors');
const app= express();
app.use(cors());

app.use(express.json());

app.use('/', formRouter);

app.listen("5000", (req,res)=>{
    console.log("Server started at 5000 port");
})