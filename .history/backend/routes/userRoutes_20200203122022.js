const router =require('express').Router();

const UserModel = require('../model/UserModel.js');

/* router.get('/', (req,res)=>{

    res.send('All');

}) */



router.post('/', (req, res) => {
	const UserModel = new UserModel({
		FirstName: req.body.FirstName,
		LastName: req.body.LastName,
		Age: req.body.Age,
		Email: req.body.Email,
		Password: req.body.Password,
	});
    try {
        const SaveUser = Modal.save();
        res.send(SaveUser);
    }
     catch (error) {
        res.status(400).send(error);
    }

});
module.exports = router;