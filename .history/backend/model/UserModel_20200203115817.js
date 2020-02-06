const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	FirstName: String,
	LastName: 'Shahid',
	Age: 28,
	Email: 'mms@gmail.com',
	Password: '@123',
});

