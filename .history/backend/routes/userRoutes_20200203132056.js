const router =require('express').Router();

const UserModel = require('../model/UserModel');




router.post('/', (req, res) => {
	const uu = new UserModel({
		FirstName: req.body.FirstName,
		LastName: req.body.LastName,
		Age: req.body.Age,
		Email: req.body.Email,
		Password: req.body.Password,
	});
    try {
        const SaveUser = uu.save();
        res.send(SaveUser);
    }
     catch (error) {
        res.status(400).send(error);
    }

});

router.get('/', async(req, res) => {
	try {
		const UserModels =  await UserModel.find();
		res.json(UserModels);
	} catch (error) {
		res.json({ message: 'Error in Retrieving Users' });
	}
});


module.exports = router;