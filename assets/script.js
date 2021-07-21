// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// save clicklistener accesses jQuery values
// $(document).ready(function () {
    //  $(".saveBtn").on("click", function () {
        // var text = $(this).val(".description")();
        // var time = $(this).attr("id");
        // saves input to local storage
        // localStorage.setItem(time, text);
    // })
   
    // If we SET it we have to GET it!
        $("#hour9 description").val(localStorage.getItem("hour9"));
        $("#hour10 description").val(localStorage.getItem("hour10"));
        $("#hour11 description").val(localStorage.getItem("hour11"));
        $("#hour12 description").val(localStorage.getItem("hour12"));
        $("#hour13 description").val(localStorage.getItem("hour13"));
        $("#hour14 description").val(localStorage.getItem("hour14"));
        $("#hour15 description").val(localStorage.getItem("hour15"));
        $("#hour16 description").val(localStorage.getItem("hour16"));
        $("#hour17 description").val(localStorage.getItem("hour17"));

    // })
     
    // function hourTracker() {
      // get current number of hours.
      // var currentHour = moment().hour();   

        // .past .present .future is in CSS for a Reason ...{
          // if (hour < currentHour) {
        //  $(this)("past");
        //  $(this)("present");
        //  $(this)("future");
          // };

          // if (hour < currentHour) {
            // $(this)("past");
            // $(this)("present");
            // $(this)("future");
            //  };

          // elseif (hour === currentHour) {
            // $(this)("past");
            // $(this)("present");
            // $(this)("future");
          // };

          // hourTracker();


    
        // example from stackoverflow
        // const colorcode = document.getElementsByClassName("color");
        // let currentHour = parseInt(moment().format('H'));
        
        // Array.from(colorcode).forEach(colorcode => {
          // let
            // colorcodeIdString = colorcode.id,
            // colorcodeHour;
          // if (colorcodeIdString) {
            // colorcodeHour = parseInt(colorcodeIdString);
          // }
          // if (colorcodeHour) {
            // if (currentHour === colorcodeHour) {
              // setColor(green);
            // } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
              // setColor(color, "blue");
            // } else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
              // setColor(color, "red");
            // } else {
              // setColor(color, "white");
            // }
          // }
        // });
        
        // function setColor(element, color) {
          // element.style.backgroundColor = color;
     


        // } 
