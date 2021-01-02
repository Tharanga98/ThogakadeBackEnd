const CustomerDTO = require('../model/CustomerDTO');

const saveCustomer = (req, resp) => {
    const customer = new CustomerDTO({
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        customerAddress: req.body.customerAddress,
        customerSalary: req.body.customerSalary,
    });
    customer.save().then(result => {
        resp.status(200).json({'isSaved': true, 'data': result});
    }).catch(err => {
        resp.status(500).json({'isSaved': false, 'data': err})
    })
};

const deleteCustomer = (req, resp) => {
       try{
           CustomerDTO.deleteMany(
               {customerId :req.headers.id}
           ).then(result=>{
               if(result.deletedCount>0){
                   resp.status(200).json({'isDeleted': true});
                   console.log('deleted...');
               }else{
                   resp.status(200).json({'isDeleted' : false}) ;
                   console.log('not...');
               }
           }).catch(err=>{
               resp.status(500).json(err);
           })
       }catch (e) {

       }
};

const updateCustomer = (req, resp) => {
  CustomerDTO .updateOne(
      {customerId : req.body.customerId},

    {
        $set:{
         customerName : req.body.customerName,
         customerAddress : req.body.customerAddress,
         customerSalary : req.body.customerSalary
        }
    }
  ).then(result=>{
      if(result.nModified>0){
          resp.status(200).json({'isUpdated' : true ,'data' : result});

      }else{
          resp.status(200).json({'isUpdated' : false,'data' : result});
      }
  }).catch(err=>{
      resp.status(500).json({'isUpdated' : 'error' , 'data' : err});
  })
};

const getAllCustomer = (req, resp) => {
    try {
        CustomerDTO.find().then(result => {
            resp.status(200).json({'data': result});
        }).catch(err => {
            resp.status(500).json(err);
        })
    } catch (e) {
    }
};

const getCustomerById = (req, resp) => {
    try{
        CustomerDTO.findOne(
            {customerId : req.headers.id}
        ).then(result=>{
            resp.status(200).json(result);
        }).catch(err=>{
            resp.status(500).json(err);
        })
    }catch(e){

    }
};

// noinspection JSUnresolvedVariable
module.exports = {
    saveCustomer,
    deleteCustomer,
    updateCustomer,
    getAllCustomer,
    getCustomerById
}; 