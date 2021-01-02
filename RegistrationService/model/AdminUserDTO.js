const mongoose=require('mongoose');

const adminUserDTO = new mongoose.Schema({
    adminUserName :{
        type : String,
        require : true
    },
    adminUserEmail : {
        type : String,
        require : true
    },
    adminUserPassword : {
        type : String,
        require : true
    }
});

module.exports=mongoose.model('adminUser' , adminUserDTO);
