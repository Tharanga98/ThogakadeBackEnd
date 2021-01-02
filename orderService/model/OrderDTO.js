const mongoose = require('mongoose');

const orderDTO = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        require: true
    },
    orderQty : {
        type : String,
        require : true
    },

});