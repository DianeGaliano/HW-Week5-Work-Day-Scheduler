//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}

setInterval(displayTime, 1000);
//Selection Sterilized Function for calander

//Function to color code time blocks past, present, future

//Click Function within timeblock to add Event

//Click Function to save added event

//Function to save to client local storage.

