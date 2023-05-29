// ADDITIONAL: button at top of page to clear all events for that day and local storage if the user wishes to
$('.btn-secondary').click(function(){
  $('.description').text("");
  localStorage.clear();
});
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
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, scheduleItem);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().hour();
  
  var timeBlock09 = dayjs(09);
  if (dayjs(currentHour).isSame(dayjs(timeBlock09))) {
    $('#hour-09').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock09))) {
    $('#hour-09').addClass("past");
  } else {
    $('#hour-09').addClass("future");
  }
  var timeBlock10 = dayjs(10);
  if (dayjs(currentHour).isSame(dayjs(timeBlock10))) {
    $('#hour-10').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock10))) {
    $('#hour-10').addClass("past");
  } else {
    $('#hour-10').addClass("future");
  }
  var timeBlock11 = dayjs(11);
  if (dayjs(currentHour).isSame(dayjs(timeBlock11))) {
    $('#hour-11').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock11))) {
    $('#hour-11').addClass("past");
  } else {
    $('#hour-11').addClass("future");
  }
  var timeBlock12 = dayjs(12);
  if (dayjs(currentHour).isSame(dayjs(timeBlock12))) {
    $('#hour-12').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock12))) {
    $('#hour-12').addClass("past");
  } else {
    $('#hour-12').addClass("future");
  }
  var timeBlock13 = dayjs(13);
  if (dayjs(currentHour).isSame(dayjs(timeBlock13))) {
    $('#hour-13').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock13))) {
    $('#hour-13').addClass("past");
  } else {
    $('#hour-13').addClass("future");
  }
  var timeBlock14 = dayjs(14);
  if (dayjs(currentHour).isSame(dayjs(timeBlock14))) {
    $('#hour-14').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock14))) {
    $('#hour-14').addClass("past");
  } else {
    $('#hour-14').addClass("future");
  }
  var timeBlock15 = dayjs(15);
  if (dayjs(currentHour).isSame(dayjs(timeBlock15))) {
    $('#hour-15').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock15))) {
    $('#hour-15').addClass("past");
  } else {
    $('#hour-15').addClass("future");
  }
  var timeBlock16 = dayjs(16);
  if (dayjs(currentHour).isSame(dayjs(timeBlock16))) {
    $('#hour-16').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock16))) {
    $('#hour-16').addClass("past");
  } else {
    $('#hour-16').addClass("future");
  }
  var timeBlock17 = dayjs(17);
  if (dayjs(currentHour).isSame(dayjs(timeBlock17))) {
    $('#hour-17').addClass("present");
  } else if (dayjs(currentHour).isAfter(dayjs(timeBlock17))) {
    $('#hour-17').addClass("past");
  } else {
    $('#hour-17').addClass("future");
  }
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#hour-09 .description').text(localStorage.getItem('hour-09'));
  $('#hour-10 .description').text(localStorage.getItem('hour-10'));
  $('#hour-11 .description').text(localStorage.getItem('hour-11'));
  $('#hour-12 .description').text(localStorage.getItem('hour-12'));
  $('#hour-13 .description').text(localStorage.getItem('hour-13'));
  $('#hour-14 .description').text(localStorage.getItem('hour-14'));
  $('#hour-15 .description').text(localStorage.getItem('hour-15'));
  $('#hour-16 .description').text(localStorage.getItem('hour-16'));
  $('#hour-17 .description').text(localStorage.getItem('hour-17'));
  

  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDay);

// ADDITIONAL: code for individual close buttons on each time slot to clear that specific hour/event if the user wishes to
$('.close').click(function(){
  var scheduleItem = $(this).siblings(".description");
  var hour = $(this).parent().attr("id");
  scheduleItem.text("");
  localStorage.removeItem(hour, scheduleItem);
})
});

