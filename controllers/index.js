const Habbit = require('../modals/habit');
let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
let days = ['SUN','MON','TUES','WED','THUR','FRI','SAT','SUN'];


module.exports.addTask = async function(req,resp){
  try{
    // checking whether the habbit already existed
    console.log('Inp Val : ',req.body.cont);
    let currCont = req.body.cont.toLowerCase();
   let checkTask = await Habbit.findOne({content : currCont });
   console.log('Input Habbit ',checkTask);
   if(checkTask){
      console.log('Already have this entry');
      
      return resp.redirect('back');     
    }
  //if checkTask is empty so go create new Habbit if not no need simply return;
  
  let currTask = await Habbit.create({
    content : currCont,
    record : []
  });
  
  // Now I need to add 7 days record on to this record array for this particular task

  for(let itr=0;itr<7;itr++){
    let currDate = new Date();
    console.log('Prev Val ',currDate);
    console.log('Present day DATE Val ',currDate.getDate());
    let updateCurrDate = new Date(currDate.getFullYear(),currDate.getMonth(),currDate.getDate());
    console.log('After Change: '+updateCurrDate+" and date is "+ updateCurrDate.getDate());
       
       let thatDayDate = getThatDate(updateCurrDate,itr);  //the date of ith day considering backwards from today's date
       let currObj = {
         date : thatDayDate,
         status : 'None'
       }
       currTask.record.push(currObj);
  }
  currTask.save();
  console.log(currTask);
 
  return resp.redirect('back');

  }catch(err){

    console.log('Error occured during creation ',err);

    return;
  }
   
}

module.exports.delTask = async function(req,resp){
  let task_id = req.params.id;
  console.log('The task ID is : ',task_id);
  
  await Habbit.findByIdAndDelete(task_id);

  return resp.redirect('back');
}

// this function helps in getting date to fill up into DB by doing subtracting from the current day when the habbit was created
function getThatDate(baseDate,count){

      console.log('CurrDate : '+count+" "+baseDate+" and date is : ",baseDate.getDate());
      baseDate.setDate(baseDate.getDate()-count);
      
      return baseDate;
}

// it helps in changing habbit status to different state
module.exports.update = async function(req,resp){
  try{
    let taskId = req.query.taskId;
    let index = req.query.ind;
    let currHabbit = await Habbit.findById(taskId);
 
   //  change the status of the current habbit ind
   let currRecord = currHabbit.record;
   let currHabbitObj = currRecord[index];
   let updateVal = getUpdate(currHabbitObj.status);
   currHabbitObj.status = updateVal;
   currHabbit.save();
 
   return resp.redirect('back');

  }catch(err){
       console.log('Error occured during creation ',err);

    return;
  }
   
}


module.exports.weekly = async function(req,resp){
  let habbitAll = await Habbit.find({});
    
    return resp.render('weekly',{
         title: 'Weekly Page',
         habbit : habbitAll,
         months : months,
         days : days 
     }); 
    
}

//this function helps to change the clicked habbit status to different state according to this user can select
function getUpdate(currentStatus){
   if(currentStatus=='Done'){
       return 'NotDone'; 
   }
   else if(currentStatus=='NotDone'){
    return 'None';
   }  
   return 'Done'
}