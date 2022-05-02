const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/habbitDB');

const db = mongoose.connection;

db.on('error',function(err){
   console.log('Error Occured while setting up Mongoose DB instance : ',err);
   return; 
});

db.once('open',()=>{
  console.log(' DB Setup Done Successfully ');
  return; 
});

module.exports = db;