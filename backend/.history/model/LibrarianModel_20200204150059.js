const mongoose = require('mongoose');

const LibrarianSchema = new mongoose.Schema({
    Name: String,
    LastName: String,
    Email: String,
    Password: String,
});

module.exports = mongoose.model('LibrarianModel', LibrarianSchema);