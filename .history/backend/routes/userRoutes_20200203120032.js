const router =require('express').Router();


router.get('/', (req,res)=>{

    res.send('All');

})

const UserModel = require('../routes/..');

router.post('/', (req, res) => {
	res.send('All');
});
module.exports = router;