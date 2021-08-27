//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}

setInterval(displayTime, 1000);
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save-button");
// Function to save to local storage with event listener
function saveTextEdit() {
    // Save related form data as an object
    var editText = {
      comment: comment.value.trim()
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("editText", JSON.stringify(editText));
  }
  
  function renderTextEdit() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastTextEdit = JSON.parse(localStorage.getItem("editText"));
    // Check if data is returned, if not exit out of the function
    if (lastTextEdit !== null) {
    document.getElementById("msg").innerHTML = lastTextEdit.comment;
    } else {
      return;
    }
  }
  
  saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  saveTextEdit();
  renderTextEdit();
  });
  
  // The init() function fires when the page is loaded 
  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderTextEdit();
  }
  init();

//Function to test for past, present and future
var currentHour = (new Date()).getHours();

$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','Red');
    }else if(val === currentHour){
      $(this).css('background-color','Green');
    }else{
      $(this).css('background-color','White');
    }
  });