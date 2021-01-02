const express = require('express');
const customerController=require('../controller/CustomerController');

const router=express.Router();

router.post('/saveCustomer',customerController.saveCustomer);
router.get('/getAllCustomer',customerController.getAllCustomer);
router.put('/updateCustomer',customerController.updateCustomer);
router.delete('/deleteCustomer',customerController.deleteCustomer);
router.get('/getCustomerById',customerController.getCustomerById);

// noinspection JSUnresolvedVariable
module.exports=router;