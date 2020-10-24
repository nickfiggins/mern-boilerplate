const express = require('express');
const mongoose = require('mongoose'); // ORM for accessing mongo
//might need body parser if not included

const items = require('./routes/api/items')


const app = express();


// Bodyparser Middleware
// unneeded
app.use(express.json());
// DB Config

const db = require('./config/keys').mongoURI;


// Connect to Mongo

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//Use routes
app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))