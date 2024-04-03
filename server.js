require('dotenv').config()
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');


const item = require('./routes/api/items')


const app = express()

app.use(bodyParser.json());

    const db  = require('./config/keys').mongoURI;

    //Connect to Mongo
    mongoose
        .connect(db)
        .then(() => console.log('MongoDB Connected...'))    
        .catch(err => console.log(err));

    //use routes
    app.use('/api/items', item);

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server started on port ${port}`));

