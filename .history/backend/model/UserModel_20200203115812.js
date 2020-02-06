const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	FirstName: 'Muhammad Mustafa',
	LastName: 'Shahid',
	Age: 28,
	Email: 'mms@gmail.com',
	Password: '@123',
});

