console.log("Loaded JS");
let view = false;
// view is a variable that checks and helps us to decide to show which view to the user like initially when the project loads then we want to show the daily section
// when users clicks weekly then view changes from default
// so basically it helps in toggling view

 
// $("#buttonStyle button").click(function (e) {
//   console.log("Button Clicked");
//   let self = this;
//   console.log(self);

//   //  ehich button got clicked
//   if ($(self).attr("data-view") == "daily") {
//     //daily button got clicked

//     // checking id this is the first time button got clicked or what
//     if ($(self).attr("data-status") == "start") {
//       //already clicked again pressed no need to do anything
//     } else {
//       // it means earlier weekly was clicked so now Daily button is clicked
//       // Steps
//       // 1) Remove the display property for Weekly to none and remove the class sepcialStyle from Weekly also and also remove the data-view prop for weekly and add this to daily
//       // 2) add display prop to daily button
//       let weekButton = $("#weeklyButton");
//       weekButton.removeClass("specialStyle");
//       weekButton.attr("data-status", "");
//       $("#weeklyView").css("display", "none");
//       let dailyButton = $("#dailyButton");
//       dailyButton.addClass("specialStyle");
//       dailyButton.attr("data-status", "start");
//       $("#displayBox").css("display", "block");
//     }
//   } else {
//     // weekly button got clicked

//     // checking id this is the first time button got clicked or what

//     if ($(self).attr("data-status") == "start") {
//       //already clicked again pressed no need to do anything
//     } else {
//       // it means earlier daily was clicked so now weekly button is clicked
//       // Steps
//       // 1) Remove the display property for Daily to none and remove the class sepcialStyle from Daily and also remove the data-view prop for Daily and add this to daily
//       // 2) add display prop to daily button
//       let dailyButton = $("#dailyButton");
//       dailyButton.removeClass("specialStyle");
//       dailyButton.attr("data-status", "");
//       $("#displayBox").css("display", "none");
      
//       let weekButton = $("#weeklyButton");
//       weekButton.addClass("specialStyle");
//       weekButton.attr("data-status", "start");
//       $("#weeklyView").css("display", "block");
     
//     }
//   }
// });


// Code to update the img in the UI 



//  <div class="statusBox" data-cont="<%=hab.record[0].status%>">
//             <a href="/update/?taskId=<%=hab.id%>&ind=0">     
//             </a>
//            </div> 