//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}

setInterval(displayTime, 1000);

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
//Save Button 
var comment = document.getElementById("msg")
var saveButton = document.getElementById("save-button")




function saveText() {
  // Save related form data as an object
  var textEdit = {
  comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("textEdit", JSON.stringify(textEdit));
}
function renderText() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastEdit = JSON.parse(localStorage.getItem("textEdit"));
  // Check if data is returned, if not exit out of the function
  if (lastEdit !== null) {
  document.getElementById("msg").innerHTML = lastEdit.comment;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  renderText();
  saveText();
});

function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderText();
}
init();



