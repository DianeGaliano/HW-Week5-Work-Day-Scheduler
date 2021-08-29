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


function saveText() {
  // Save related form data as an object
  var textEdit = {
  comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("textEdit", JSON.stringify(textEdit));
}

function renderText() {
  var lastEdit = JSON.parse(localStorage.getItem("textEdit"));
   if (lastEdit !== null) {
    document.getElementById("msg").innerHTML = lastEdit.comment;
  }else {
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