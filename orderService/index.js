const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json({limit: '100mb'}));
app.use(cors());
app.use(bodyParser());

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(result => {
    app.listen(3002, () => {
        console.log('server started port 3002.....');
    })
}).catch(err => {
    console.log(err);
});