const router =require('express').Router();

const UserModel = require('../routes/userRoutes');

router.get('/', (req,res)=>{

    res.send('All');

})



router.post('/', (req, res) => {
	const UserModel - new UserModel({

    FirstName: REq,
	LastName: String,
	Age: Number,
	Email: String,
	Password: String,

    });
});
module.exports = router;