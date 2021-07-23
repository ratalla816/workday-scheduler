
// Current day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);





  // Get data from local storage 
  $("#9").val(localStorage.getItem("hour9"));
  $("#10").val(localStorage.getItem("hour10"));
  $("#11").val(localStorage.getItem("hour11"));
  $("#12").val(localStorage.getItem("hour12"));
  $("#13").val(localStorage.getItem("hour13"));
  $("#14").val(localStorage.getItem("hour14"));
  $("#15").val(localStorage.getItem("hour15"));
  $("#16").val(localStorage.getItem("hour16"));
  $("#17").val(localStorage.getItem("hour17"));
  
  timeTracker();


