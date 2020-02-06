const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    BookName:   String,
    Category :   String,
    Author    :       String,
    PublishDate :    String,
});

module.exports = mongoose.model('ABookSchemModel', BookSchema);