const express = require('express');
const app = express();

const mongoose = require('mongoose');

var ConnectionString = 'mongodb://localhost:27017/LibraryDb';

mongoose.connect(ConnectionString,()=> console.log('Database Is Connected'));

//Import Routes
const UserRouting = require('./routes/userRoutes');

//Routing 

app.listen(4000,()=>console.log('Server Running'));
