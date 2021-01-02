

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
//------------------------------

const customerRoute=require('./router/CustomerRout');

//----------------------------

const app = express();

app.use(express.json({limit:'100mb'}));
app.use(bodyParser());
app.use(cors());

mongoose.connect('mongodb://localhost/thogakade', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    app.listen(3000,()=>{
        console.log("server has bean started port 30000...");
    })
}).catch(err=>{
    console.log("try again....................."+err);
});

//--------------------------------

app.use('/api/v1/customer',customerRoute);

//--------------------------

