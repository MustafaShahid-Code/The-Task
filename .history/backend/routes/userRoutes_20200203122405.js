const router =require('express').Router();

const UserModel = require('../model/UserModel');

/* router.get('/', (req,res)=>{

    res.send('All');

}) */



router.post('/', (req, res) => {
	const uu = new UserModel({
	FirstName
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