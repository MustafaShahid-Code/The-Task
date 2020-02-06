const mongoose = require('mongoose');

const ULibrarianSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Age: Number,
    Email: String,
    Password: String,
});

module.exports = mongoose.model('UserModel', UserSchema);