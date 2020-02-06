const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');
const cors = require('cors');

var ConnectionString = 'mongodb://localhost:27017/Library_Db';

mongoose.connect(ConnectionString,{useUnifiedTopology: true , useNewUrlParser: true } ,()=> console.log('Database Is Connected'));

//Middleware 
app.use(cors());

//Import Routes
const UserRouting = require('./routes/userRoutes');
//const loginRoutes  = require('./routes/UserLogin');

//Routing MiddleWare
app.use('/api/users', UserRouting);
app.use('/api/users/login', UserRouting);
app.use('/api/librarian/login', LibrarianRoutes);


app.listen(4000,()=>console.log('Server Running'));
