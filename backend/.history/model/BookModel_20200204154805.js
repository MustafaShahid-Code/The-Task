const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    BookName:   String,
    Category :    String,
    Author    :       String,
    Publish Date :    String,
});

module.exports = mongoose.model('AdminModel', AdminSchema);