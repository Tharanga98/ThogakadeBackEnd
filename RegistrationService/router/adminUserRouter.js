const express=require('express');
const adminUserController=require('../controller/AdminUserController');

const router=express.Router();

router.post('/createAccount',adminUserController.createAccount);
router.get('/logInAccount',adminUserController.logInAccount);

module.exports=router;