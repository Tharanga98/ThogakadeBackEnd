const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const adminUserRouter=require('./router/adminUserRouter');

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
    app.listen(3001,()=>{
        console.log("server has bean started port 3001...");
    })
}).catch(err=>{
    console.log("try again....................."+err);
});


//-------------------------------------------

app.use('/api/v1/admin',adminUserRouter);


//---------------------------------------------