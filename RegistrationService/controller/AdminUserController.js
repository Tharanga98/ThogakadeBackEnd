
const adminUserDTO=require('../model/AdminUserDTO');
const bcrypt = require('bcrypt');

const createAccount=(req,resp)=>{

    bcrypt.hash(req.body.adminUserPassword, 10, function(err, hash) {


        const adminUser=new adminUserDTO({
            adminUserName:req.body.adminUserName,
            adminUserEmail:req.body.adminUserEmail,
            adminUserPassword:hash
        });

        adminUser.save().then(result=>{
            resp.status(200).json({'isSaved':true});
        }).catch(err=>{
            resp.status(500).json({'isSaved':false});
        })

    });

};

const logInAccount=(req,resp)=>{
    adminUserDTO.findOne({adminUserEmail : req.headers.email}).then(result=>{
        if(result!=null){

            bcrypt.compare(req.headers.password, result.adminUserPassword).then(function(final_result) {
               resp.status('200').json(final_result);
            });

        }else{
            resp.status(200).json({'message' : 'customer not found..','inFound' : false})
        }

    }).catch(err=>{
        resp.status(500).json(err);
    });
};

module.exports={
    createAccount,
    logInAccount
};