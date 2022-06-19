const router = require('express').Router();
const profileController = require('../controllers/Profile');
router.post('/profile/create',profileController.create);
// router.get('/profile',(req,res)=>{
//   let queryparamter =req.query;
//   console.log(queryparamter.age);
//   res.json(queryparamter);
// });
router.get('/profile',profileController.find);

router.put('/profile/update',profileController.update);

router.delete('/profile/delete',profileController.delete);
module.exports = router;