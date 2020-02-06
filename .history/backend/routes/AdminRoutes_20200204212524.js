const router = require('express').Router();
const bcrypt = require('bcryptjs');
const AdminModel = require('../model/AdminModel');
const jwt = require('jsonwebtoken');


//CreateAdmin
router.post('/', async (req, res) => {

    const CheckEmail = await AdminModel.findOne({
        Email: req.body.Email
    });
    if (CheckEmail) {
        return res.status(400).send('This Email Already Exist..');
    }
    //EncryptPassword
    const salt = await bcrypt.genSalt(10);
    const EncryptedPassword = await bcrypt.hash(req.body.Password, salt);
    const uu = new AdminModel({
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
//GetAllAdmin
router.get('/', async (req, res) => {
    try {
        const AdminModels = await AdminModel.find();
        res.json(AdminModels);
    } catch (error) {
        res.json({ message: 'Error in Retrieving Admins' });
    }
});

//GetByIDAdmin
router.get('/:usersId', async (req, res) => {
    try {
        const AdminModels = await AdminModel.findById(req.params.usersId);
        res.json(AdminModels);
    } catch (error) {
        res.json({ message: 'Error in Retrieving A Admin' });
    }
});

//UpdateAdmin
router.put('/:usersId', async (req, res) => {

    try {

        const User = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password,
        }
        const UpdateLibrarian = await AdminModel.findByIdAndUpdate({ _id: req.params.usersId }, User);
        res.json(UpdateLibrarian);
    }
    catch (error) {
        res.json({ message: 'Error in Updating Admin' });
    }

});

//DeleteAdmin

router.delete('/:usersId', async (req, res) => {
    try {

        const DeleteLibrarian = await AdminModel.findByIdAndDelete(req.params.usersId);
        res.json(DeleteLibrarian);
    } catch (error) {
        res.json({ message: 'Error in Deleting  User' });
    }
});


//AdminLogin

router.post('/login', async (req, res) => {

    //Check UserEmail
    const librarianEmail = await AdminModel.findOne({ Email: req.body.Email });
    if (!librarianEmail) return res.status(400).send('Email Is Wrong..');


    //Check UserPassword
    const librarianPassword = await bcrypt.compare(req.body.Password, librarianEmail.Password);

    if (!librarianPassword) return res.status(400).send('Invalid Password');
    res.send('Logged In');


});



module.exports = router;
