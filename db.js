const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"    //////need to add 0 0 0 0 to work

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo");

}

module.exports = connectToMongo