const router =require('express').Router();

const UserModel = require('../model/UserModel');

router.get('/', (req, res) => {
	res.send('All listings');
});

// Single listing
router.get('/:listingId', (req, res) => {
	res.send('Single listing');
});



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
module.exports = router;