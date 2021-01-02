const mongoose=require('mongoose');
const customerDTO=new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
    },
    customerAddress:{
        type:String,
        required:true
    },
    customerSalary:{
        type:Number,
        required:true
    }
});


module.exports=mongoose.model('customer',customerDTO);
