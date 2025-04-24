const express = require('express');
const apiRoute = require('./routes');

const app = express();

app.use('/api',apiRoute)


app.listen(3000,()=>{
    console.log("listening")
})