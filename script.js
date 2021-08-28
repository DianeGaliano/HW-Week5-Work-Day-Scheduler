//Current Date Displayed at the top of the calendar
var timeDisplay = $ ("#currentDay");

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplay.text(rightNow)
}

setInterval(displayTime, 1000);

//Save Button 
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save-button");

// Function to save to local storage with event listener
function saveTextEdit() {
    var editText = {
      comment: comment.value.trim()
    };
    localStorage.setItem("editText", JSON.stringify(editText));
  }
  
  function renderTextEdit() {
    var lastTextEdit = JSON.parse(localStorage.getItem("editText"));
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
  
  function init() {
    renderTextEdit();
  }
  init();


//Function to test for past, present and future

var currentHour = (new Date()).getHours();

$(".colorcode").each(function(){
    var val = parseInt($(this).prop("id"));
    if(val > currentHour && val < currentHour + 6){
      //Future
      $(this).css("background-color: #77dd77", "color: white");
    }else if(val === currentHour){
      //Current
      $(this).css("background-color: #ff6961", "color: white");
    }else{
      //Past
      $(this).css("background-color: #d3d3d3", "color: white");
    }
  });