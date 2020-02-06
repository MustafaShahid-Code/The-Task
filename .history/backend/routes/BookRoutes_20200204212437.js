const router = require('express').Router();
const bcrypt = require('bcryptjs');
const BookModel = require('../model/BookModel');
const jwt = require('jsonwebtoken');


//CreateBook
router.post('/', async (req, res) => {
   
    const uu = new BookModel({
        BookName: req.body.BookName,
        Category: req.body.Category,
        Author: req.body.Author,
        PublishDate: req.body.PublishDate,
    });
    try {
        const SaveBook = await uu.save();
        res.send(SaveBook);
    }
    catch (error) {
        res.status(400).send(error);
    }

});
//GetAllBooks
router.get('/', async (req, res) => {
    try {
        const BookModels = await BookModel.find();
        res.json(BookModels);
    } catch (error) {
        res.json({ message: 'Error in Retrieving Books' });
    }
});

//GetByIDBook
router.get('/:usersId', async (req, res) => {
    try {
        const BookModels = await BookModel.findById(req.params.usersId);
        res.json(BookModels);
    } catch (error) {
        res.json({ message: 'Error in Retrieving A ook' });
    }
});

//UpdateBook
router.put('/:usersId', async (req, res) => {

    try {

        const User = {
            BookName: req.body.BookName,
            Category: req.body.Category,
            Author: req.body.Author,
            PublishDate: req.body.PublishDate,
        }
        const UpdateLibrarian = await BookModel.findByIdAndUpdate({ _id: req.params.usersId }, User);
        res.json(UpdateLibrarian);
    }
    catch (error) {
        res.json({ message: 'Error in Updating Book' });
    }

});

//DeleteBook

router.delete('/:usersId', async (req, res) => {
    try {

        const DeleteLibrarian = await BookModel.findByIdAndDelete(req.params.usersId);
        res.json(DeleteLibrarian);
    } catch (error) {
        res.json({ message: 'Error in Deleting  Book' });
    }
});





module.exports = router;
