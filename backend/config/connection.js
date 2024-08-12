const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@adso2669736.fa67f9e.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;