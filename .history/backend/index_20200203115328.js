const express = require('express');
const app = express();

const mongoose = require('mongoose');

var ConnectionString = 'mongodb://localhost:27017/LibraryDb';

mongoose.connect(ConnectionString,()=>)

//Import Routes
const UserRouting = require('./routes/userRoutes');

app.listen(4000,()=>console.log('Server Running'));
