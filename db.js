const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017"    //////need to add 0 0 0 0 to work

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");

}

module.exports = connectToMongo