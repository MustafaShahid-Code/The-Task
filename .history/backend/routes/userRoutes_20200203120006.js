const router =require('express').Router();


router.get('/', (req,res)=>{

    res.send('All');

})

Cons

router.post('/', (req, res) => {
	res.send('All');
});
module.exports = router;