const router =require('express').Router();


router.get('/', (req,res)=>{

    res.send('All');

})

router.get('/', (req, res) => {
	res.send('All');
});
module.exports = router;