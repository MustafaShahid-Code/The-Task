const router =require('express').Router();

const UserModel = require('../model/UserModel');

/* router.get('/', (req,res)=>{

    res.send('All');

}) */



router.post('/', (req, res) => {
	const uu = new UserModel({
		FirstName: req.body.FirstName,
		LastName: req.body.FirstName,
		FirstName: req.body.FirstName,
		FirstName: req.body.FirstName,
		FirstName: req.body.FirstName,
	});
    try {
        const SaveUser = uu.save();
        res.send(SaveUser);
    }
     catch (error) {
        res.status(400).send(error);
    }

});
module.exports = router;