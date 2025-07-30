const mongoose = require('mongoose');
require('dotenv').config();
// now define the mongoDB connection url

const mongoURL=process.env.MONGO_URI //if hotels name db exist it will switch to it otherwise it will create one
//const mongoURL =process.env.DB_URL


//set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//get the default connection
//Mongoose maintains a default conncetion objext representing the MongoDB conncetion
const db= mongoose.connection;

//Define event listener
db.on('connected',()=>{
    console.log("Connected to MongoDB server");
});

db.on('error',(err)=>{
    console.log("MongoDB connection error: ",err);
});

db.on('disconnected',()=>{
    console.log("MongoDB dissconnected");
});

//Export the database connection

module.exports={
    db
};