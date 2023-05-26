// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function(event){
    event.preventDefault();
    var scheduleItem = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(scheduleItem, time);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().hour();
  
  var timeBlock09 = dayjs(09);
  if (currentHour == timeBlock09) {
    $('#hour-09').addClass("present");
  } else if (currentHour > timeBlock09) {
    $('#hour-09').addClass("past");
  } else {
    $('#hour-09').addClass("future");
  }
  var timeBlock10 = dayjs(10);
  if (currentHour == timeBlock10) {
    $('#hour-10').addClass("present");
  } else if (currentHour > timeBlock10) {
    $('#hour-10').addClass("past");
  } else {
    $('#hour-10').addClass("future");
  }
  var timeBlock11 = dayjs(11);
  if (currentHour == timeBlock11) {
    $('#hour-11').addClass("present");
  } else if (currentHour > timeBlock11) {
    $('#hour-11').addClass("past");
  } else {
    $('#hour-11').addClass("future");
  }
  var timeBlock12 = dayjs(12);
  if (currentHour == timeBlock12) {
    $('#hour-12').addClass("present");
  } else if (currentHour > timeBlock12) {
    $('#hour-12').addClass("past");
  } else {
    $('#hour-12').addClass("future");
  }
  var timeBlock13 = dayjs(13);
  if (currentHour == timeBlock13) {
    $('#hour-13').addClass("present");
  } else if (currentHour > timeBlock13) {
    $('#hour-13').addClass("past");
  } else {
    $('#hour-13').addClass("future");
  }
  var timeBlock14 = dayjs(14);
  if (currentHour == timeBlock14) {
    $('#hour-14').addClass("present");
  } else if (currentHour > timeBlock14) {
    $('#hour-14').addClass("past");
  } else {
    $('#hour-14').addClass("future");
  }
  var timeBlock15 = dayjs(15);
  if (currentHour == timeBlock15) {
    $('#hour-15').addClass("present");
  } else if (currentHour > timeBlock15) {
    $('#hour-15').addClass("past");
  } else {
    $('#hour-15').addClass("future");
  }
  var timeBlock16 = dayjs(16);
  if (currentHour == timeBlock16) {
    $('#hour-16').addClass("present");
  } else if (currentHour > timeBlock16) {
    $('#hour-16').addClass("past");
  } else {
    $('#hour-16').addClass("future");
  }
  var timeBlock17 = dayjs(17);
  if (currentHour == timeBlock17) {
    $('#hour-17').addClass("present");
  } else if (currentHour > timeBlock17) {
    $('#hour-17').addClass("past");
  } else {
    $('#hour-17').addClass("future");
  }
  
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDay);
});
