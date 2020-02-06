const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	FirstName: String,
	LastName: String,
	Age: Number,
	Email: String,
	Password: String,
	Role: String,
});

module.exports = mongoose.model('UserModel', UserSchema);

