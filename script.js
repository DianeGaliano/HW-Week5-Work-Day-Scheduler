//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}

setInterval(displayTime, 1000);

//Save Button 
var comment = document.getElementById("msg")
var saveButton = document.getElementById("save-button")

var messageInput = document.querySelector("#msg")

function saveText() {
  // Save related form data as an object
  var textEdit = {
  comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("textEdit", JSON.stringify(textEdit));
}

var message = {

}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  renderText();
  saveText();
});

function init() {
  var lastEdit = JSON.parse(localStorage.getItem("textEdit"));
   if (lastEdit !== null) {
    document.getElementById("msg").innerHTML = lastEdit.comment;
  }else {
  return;
  } 
  renderText();
}

//Color
$(".colorCode").each(function(){
  var time = parseInt($(this).prop("id"));
  if (time === timeDisplay){
    $(this).addClass("present");
  }else if(time < timeDisplay){
    $(this).addClass("past");
  }else{
    $(this).addClass("future");
  }
});
