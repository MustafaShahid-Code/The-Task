const mongoose = require('mongoose');

const LibrarianSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
    Role: String,
});

module.exports = mongoose.model('LibrarianModel', LibrarianSchema);