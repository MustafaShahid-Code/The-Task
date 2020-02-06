const router = require('express').Router();

router.post('/login' ,(req,res) =>{

    try {
        res.send('UserLogin Successfully');
    } catch (error) {
        res.send();
    }
    

});

module.exports=router; 