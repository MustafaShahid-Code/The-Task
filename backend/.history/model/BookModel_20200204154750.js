const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    BookName:   String,
    Category :    String,
    Email    :       String,
    Password :    String,
});

module.exports = mongoose.model('AdminModel', AdminSchema);