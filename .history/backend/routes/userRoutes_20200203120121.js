const router =require('express').Router();

const UserModel = require('../routes/userRoutes');

router.get('/', (req,res)=>{

    res.send('All');

})



router.post('/', (req, res) => {
	
});
module.exports = router;