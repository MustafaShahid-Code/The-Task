const router =require('express').Router();

const UserModel = require('../routes/userRoutes');

router.get('/', (req,res)=>{

    res.send('All');

})



router.post('/', (req, res) => {
	const UserModel - new UserModel({

    FirstName: req.body.FirstName,
	LastName: req.body.LastName,
	Age: req.body.Age,
	Email: req.body.Email,
	Password: req.,

    });
});
module.exports = router;