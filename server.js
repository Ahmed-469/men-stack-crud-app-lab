const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require('morgan');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const carRoutes = require("./controllers/cars.routes");

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to Database");
    }
    catch(error){
        console.log("Error Occured");
    }
}

connectToDB();

app.use('/cars', carRoutes);

app.listen(3000,()=>{
    console.log('App is working');
});