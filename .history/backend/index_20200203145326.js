const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');

var ConnectionString = 'mongodb://localhost:27017/Library_Db';

mongoose.connect(ConnectionString,{useUnifiedTopology: true , useNewUrlParser: true } ,()=> console.log('Database Is Connected'));

//Import Routes
const UserRouting = require('./routes/userRoutes');
const loginRoutes  = require

//Routing MiddleWare
app.use('/api/users', UserRouting);

app.listen(4000,()=>console.log('Server Running'));
