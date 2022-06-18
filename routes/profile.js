const router =require('express').Router();
const profileContoller =require('../contoller/profile')

router.post('/profile',profileContoller.create)
router.get('/profile',profileContoller.index)
router.put('/profile',profileContoller.update)
router.delete('/profile',profileContoller.delete)
module.exports = router;
