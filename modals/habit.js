const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  content:{
     type:String,
     required : true
  },
  record:[{
     date : {
       type:Date,
       required:true
     },
     status:{
      type:String, 
      enum : ['Done','NotDone','None'],
      required:true
     }
  }]
},{
  timestamps : true
});

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;