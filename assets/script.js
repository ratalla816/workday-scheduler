
// Current day and date in momentjs displayed as HTML 
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function () {
  // on click callback - event listener
  $(".saveBtn").on("click", function () {
    // jquery tree traversal - push text from the "description" field of hour block.
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Saves text into local storage
    localStorage.setItem(time, text);
  })

  // timeRender indexes time blocks, adds colorcoding, and enables persistence.
  function timeRender() {
    // determine the current hour
    var timeNow = moment().hour();
    // console.log(timeNow);

    // string argument determines where the current hour is in relation to the rest of the hours in the array (blockTime).
    $(".time-block").each(function () {
      // split string determines the temporal position of each hour //
      // substring parseInt($(this) gets the numeric value of the hour from the array // substring ("hour")[1] cycles through each hour.
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      // console.log($(this));

      // adds, and removes colorcoded CSS styles to each hour in the array based on its temporal relationship to the current hour.
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      // is the current hour the 
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }


  // Retrieve the values of the specified hour block from local storage.   
  $("#9").val(localStorage.getItem("hour9"));
  $("#10").val(localStorage.getItem("hour10"));
  $("#11").val(localStorage.getItem("hour11"));
  $("#12").val(localStorage.getItem("hour12"));
  $("#13").val(localStorage.getItem("hour13"));
  $("#14").val(localStorage.getItem("hour14"));
  $("#15").val(localStorage.getItem("hour15"));
  $("#16").val(localStorage.getItem("hour16"));
  $("#17").val(localStorage.getItem("hour17"));

  timeRender();

})

