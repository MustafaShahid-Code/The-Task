const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	FirstName: String,
	LastName: String,
	Age: Number,
	Email: String,
	Password: String,
});

module.exports = mongoose.model();

