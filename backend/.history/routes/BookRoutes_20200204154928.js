const router = require('express').Router();
const bcrypt = require('bcryptjs');
const LibrarianModel = require('../model/BookModel');
const jwt = require('jsonwebtoken');


//CreateLibrarian
router.post('/', async (req, res) => {

    const CheckEmail = await LibrarianModel.findOne({
        Email: req.body.Email
    });
    if (CheckEmail) {
        return res.status(400).send('This Email Already Exist..');
    }
    //EncryptPassword
    const salt = await bcrypt.genSalt(10);
    const EncryptedPassword = await bcrypt.hash(req.body.Password, salt);
    const uu = new LibrarianModel({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: EncryptedPassword,
    });
    try {
        const SaveUser = await uu.save();
        res.send(SaveUser);
    }
    catch (error) {
        res.status(400).send(error);
    }

});
//GetAll
router.get('/', async (req, res) => {
    try {
        const LibrarianModels = await LibrarianModel.find();
        res.json(LibrarianModels);
    } catch (error) {
        res.json({ message: 'Error in Retrieving Users' });
    }
});

//GetByID
router.get('/:usersId', async (req, res) => {
    try {
        const LibrarianModels = await LibrarianModel.findById(req.params.usersId);
        res.json(LibrarianModels);
    } catch (error) {
        res.json({ message: 'Error in Retrieving A User' });
    }
});

//UpdateUser
router.put('/:usersId', async (req, res) => {

    try {

        const User = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Age: req.body.Age,
            Email: req.body.Email,
            Password: req.body.Password,
        }
        const UpdateLibrarian = await LibrarianModel.findByIdAndUpdate({ _id: req.params.usersId }, User);
        res.json(UpdateLibrarian);
    }
    catch (error) {
        res.json({ message: 'Error in Updating User' });
    }

});

//DeleteUser

router.delete('/:usersId', async (req, res) => {
    try {

        const DeleteLibrarian = await LibrarianModel.findByIdAndDelete(req.params.usersId);
        res.json(DeleteLibrarian);
    } catch (error) {
        res.json({ message: 'Error in Deleting  User' });
    }
});


//UserLogin

router.post('/login', async (req, res) => {

    //Check UserEmail
    const librarianEmail = await LibrarianModel.findOne({ Email: req.body.Email });
    if (!librarianEmail) return res.status(400).send('Email Is Wrong..');


    //Check UserPassword
    const librarianPassword = await bcrypt.compare(req.body.Password, librarianEmail.Password);

    if (!librarianPassword) return res.status(400).send('Invalid Password');
    res.send('Logged In');


});



module.exports = router;
