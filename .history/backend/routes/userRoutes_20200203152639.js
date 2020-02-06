const router =require('express').Router();

const UserModel = require('../model/UserModel');




router.post('/', async(req, res) => {
	const uu = new UserModel({
		FirstName: req.body.FirstName,
		LastName: req.body.LastName,
		Age: req.body.Age,
		Email: req.body.Email,
		Password: req.body.Password,
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
router.get('/', async(req, res) => {
	try {
		const UserModels =  await UserModel.find();
		res.json(UserModels);
	} catch (error) {
		res.json({ message: 'Error in Retrieving Users' });
	}
});

//GetByID
router.get('/:usersId', async (req, res) => {
	try {
		const UserModels = await UserModel.findById(req.params.usersId);
		res.json(UserModels);
	} catch (error) {
		res.json({ message: 'Error in Retrieving A User' });
	}
});

//UpdateUser
router.put('/:usersId', async(req,res) =>{

    try {
        
        const User = {
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			Age: req.body.Age,
			Email: req.body.Email,
			Password: req.body.Password,
		}
         const UpdateUser = await UserModel.findByIdAndUpdate({ _id: req.params.usersId }, User);
			res.json(UpdateUser);
    } 
    catch (error) 
    {
        	res.json({ message: 'Error in Updating User' });
    }

});

//DeleteUser

router.delete('/:usersId', async (req, res) => {
	try {
		
		const DeleteUser = await UserModel.findByIdAndDelete(req.params.usersId);
		res.json(DeleteUser);
	} catch (error) {
		res.json({ message: 'Error in Deleting  User' });
	}
});


//UserLogin

router.post('/login', async (req, res) => {
	
	//Check UserEmail
	const user = await UserModel.findOne

});

module.exports = router;