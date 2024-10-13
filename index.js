require('dotenv').config();
require('express-async-errors');

const express = require ('express');
const app = express();
//const connectDB = require('./db/connect')
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/userRoutes');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandler = require('./middleware/errorHandler');

//middleware
//app.use(express.static('./public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<b>MINIMART API reached!</b> <br><a href="/api/v1/products">Product Routes</a>')
})

//user routes
app.use('/api/v1/user', userRoutes);


//product route
app.use('/api/v1/products', productRoutes);


app.use('*', notFoundMiddleware)
app.use(errorHandler)

const port = process.env.PORT || 4000;


const start = async() =>{
    try {
        //connectDB
        //await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port} ....  `))
    } catch (error) {
        console.log(error.message) 
    }
}

start()