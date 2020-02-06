const express = require('express');
const app = express();

//Import Routes
const UserRouting = require('./node_modules');

app.listen(4000,()=>console.log('Server Running'));
