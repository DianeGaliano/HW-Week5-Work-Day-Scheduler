//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}

setInterval(displayTime, 1000);

//Color
var currentHour = (new Date()).getHours();

$(".colorCode").each(function(){
  var time = parseInt($(this).prop("id"));
  if (time === currentHour){
    $(this).addClass("present");
  }else if(time < currentHour){
    $(this).addClass("past");
  }else{
    $(this).addClass("future");
  }
});






