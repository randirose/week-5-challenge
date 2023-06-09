// Wrapping all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(function () {
  // event listener for clicks on the save button using jquery. uses 'this' keyword to traverse the DOM based on the save button's location that the user clicks on ('this' is referring to the button, and then traverses the DOM by going to its sibling elements and finding the 'description' class (the value in localStorage's parameters), and to its parent element to find the hour id (the key in localStorage's parameters)).
  $('.saveBtn').click(function(event){
    event.preventDefault();
    var scheduleItem = $(this).siblings('.description').val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, scheduleItem);
  });

  // code applies the past, present, or future class to each time block by comparing the id hour to the current hour. 
  // Dayjs is used to get the current hour, as well as declare the hour of day for each time block. Code uses Dayjs syntax to compare the current hour to that time block's hour (isSame, isAfter)
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
  
  
  // code gets any user input that was saved in localStorage and sets the values of the corresponding textarea elements
  $('#hour-09 .description').text(localStorage.getItem('hour-09'));
  $('#hour-10 .description').text(localStorage.getItem('hour-10'));
  $('#hour-11 .description').text(localStorage.getItem('hour-11'));
  $('#hour-12 .description').text(localStorage.getItem('hour-12'));
  $('#hour-13 .description').text(localStorage.getItem('hour-13'));
  $('#hour-14 .description').text(localStorage.getItem('hour-14'));
  $('#hour-15 .description').text(localStorage.getItem('hour-15'));
  $('#hour-16 .description').text(localStorage.getItem('hour-16'));
  $('#hour-17 .description').text(localStorage.getItem('hour-17'));
  

  // displays the current date at the top of the page
  var currentDay = dayjs().format('dddd, MMM D, YYYY');
$('#currentDay').text("Today is " + currentDay);

// ADDITIONAL: code for individual close buttons on each time slot to clear that specific hour/event if the user wishes to
$('.close').click(function(){
  var scheduleItem = $(this).siblings(".description");
  var hour = $(this).parent().attr("id");
  scheduleItem.text("");
  localStorage.removeItem(hour, scheduleItem);
});
// ADDITIONAL: button at top of page to clear all events for that day and local storage if the user wishes to
$('.btn-secondary').click(function(){
  $('.description').text("");
  localStorage.clear();
});
});

