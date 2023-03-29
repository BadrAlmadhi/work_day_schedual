// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(document).ready(function() {
  console.log("ready");
  $("#currentDay").text(dayjs().format("MM/DD/YYYY"))// Day js give us the current date
  $("textarea").each(function(i) {
  $(this).val(localStorage.getItem($(this).parent("div").attr("id")))
  });
  });
  
  // Get the hour
  
  
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  $(".saveBtn").click(function (){
    console.log($(this).siblings("textarea").val())
    localStorage.setItem($(this).parent("div").attr("id"), $(this).siblings("textarea").val())
  });
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    function timeTracker(){
    var time = moment().hour();
  
    // create loop
    $('time-block').each(function(){
      var parentTime = parseInt($(this).attr('id').splits('hour')[1]);
  
      if (parentTime < time) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (parentTime === time) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
    })
    }
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
  
    timeTracker();
   
  });
  