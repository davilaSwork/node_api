const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@adso2669736.c6a7gzi.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;