//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}


//Selection Sterilized Function for calander
var timeBlockData = function (name, comment) {
  var cardColumnEl = $("<table>");
  cardColumnEl.addClass(".time-block");


var cardEl = $("<td>");
  // Add a class of .custom-card
  cardEl.addClass(".hour");
  cardEl.appendTo(cardColumnEl);

  var cardName = $("<td>").addClass(".submitBtn").text(name);
  cardName.appendTo(cardEl);
}

//Function to color code time blocks past, present, future

//Click Function within timeblock to add Event

//Click Function to save added event

//Function to save to client local storage.

setInterval(displayTime, 1000);