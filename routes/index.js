const express = require("express");
const router = express.Router();
const mainController = require("../controllers/index");
const { removeListener } = require("../modals/habit");
const Habbit = require("../modals/habit");
let months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let days = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT", "SUN"];
console.log("routes loaded");

router.get("/", async function (req, resp) {
  let habbitAll = await Habbit.find({});
  //need to check whether to update habbit record or not
  let currDate = new Date();

  if (!habbitAll) {
    console.log("Nothing Found in Habbit");
    // Fresh system no input till now no need to check
  } else {
    //  loop through each habbit
    // habbit exist
    let currDate = new Date();
    let updateCurrDate = new Date(
      currDate.getFullYear(),
      currDate.getMonth(),
      currDate.getDate()
    );
    for (hab of habbitAll) {
      // Check that first habbit date value is equal to currDate if yess no need to update date records for the habbit
      //   console.log(hab.content);
      //   let arr = hab.record;
      //   for(itr of arr){
      //      console.log(itr.date+" "+itr.status);
      //   }
    //   let currHabbitDate = hab.record[0].date;
    // //   if(updateCurrDate.toString()==currHabbitDate.toString()){
    //         let globalDate = updateCurrDate.toISOString().split('T')[0];   
    //         let localDate = currHabbitDate.toISOString().split('T')[0]; 
    //         if(globalDate == localDate){
    //             console.log('No need to update record for : ',hab.content); 
    //         }
    //         else{
    //             console.log('Need to update the records ',hab.content);
    //         }
    //   }

    }
  }

  // case no need    ==> check curr Habbit

  return resp.render("home", {
    title: "Home Page",
    habbit: habbitAll,
    months: months,
    days: days,
  });
});

router.post("/add", mainController.addTask);

router.get("/delete/:id", mainController.delTask);

router.get("/update", mainController.update);

router.get("/weekly", mainController.weekly);

module.exports = router;
