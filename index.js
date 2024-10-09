require('dotenv').config();
require('express-async-errors');

const express = require ('express');
const app = express();

//middleware
app.use(express.static('./public'));
app.use(express.json());






const port = process.env.PORT || 4000;


const start = async() =>{
    try {
        
        app.listen(port, console.log(`Sever is listening on port ${port} ....  `))
    } catch (error) {
        console.log(error.message) 
        
    }
}

start()