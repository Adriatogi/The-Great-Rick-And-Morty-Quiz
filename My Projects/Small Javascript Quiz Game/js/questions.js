var total = 0;
var current = 0;

function restartButtons() {
  $("#choice1").text("Restart");
  $("#choice2").text("Restart");
  $("#choice3").text("Restart");
  $("#choice1").hide();
  $("#choice3").hide();
}
function character(total) {
  switch (total) {
    case 111:
      $("h2").text("You are character 111");
      restartButtons();
      break;
    case 211:
      $("h2").text("You are character 211");
      restartButtons();
      break;
    case 311:
      $("h2").text("You are character 311");
      restartButtons();
      break;
    case 121:
      $("h2").text("You are character 121");
      restartButtons();
      break;
    case 221:
      $("h2").text("You are character 221");
      restartButtons();
      break;
    case 321:
      $("h2").text("You are character 321");
      restartButtons();
      break;
    case 131:
      $("h2").text("You are character 131");
      restartButtons();
      break;
    case 231:
      $("h2").text("You are character 231");
      restartButtons();
      break;
    case 331:
      $("h2").text("You are character 331");
      restartButtons();
      break;
    case 112:
      $("h2").text("You are character 112");
      restartButtons();
      break;
    case 212:
      $("h2").text("You are character 212");
      restartButtons();
      break;
    case 312:
      $("h2").text("You are character 312");
      restartButtons();
      break;
    case 122:
      $("h2").text("You are character 122");
      restartButtons();
      break;
    case 222:
      $("h2").text("You are character 222");
      restartButtons();
      break;
    case 322:
      $("h2").text("You are character 322");
      restartButtons();
      break;
    case 132:
      $("h2").text("You are character 132");
      restartButtons();
      break;
    case 232:
      $("h2").text("You are character 232");
      restartButtons();
      break;
    case 332:
      $("h2").text("You are character 332");
      restartButtons();
      break;
    case 113:
      $("h2").text("You are character 113");
      restartButtons();
      break;
    case 213:
      $("h2").text("You are character 213");
      restartButtons();
      break;
    case 313:
      $("h2").text("You are character 313");
      restartButtons();
      break;
    case 123:
      $("h2").text("You are character 123");
      restartButtons();
      break;
    case 223:
      $("h2").text("You are character 223");
      restartButtons();
      break;
    case 323:
      $("h2").text("You are character 323");
      restartButtons();
      break;
    case 133:
      $("h2").text("You are character 133");
      restartButtons();
      break;
    case 233:
      $("h2").text("You are character 233");
      restartButtons();
      break;
    case 333:
      $("h2").text("You are character 333");
      restartButtons();
      break;
  }
}

function changeQuestion(){
  if(current ===0){
    $("h2").text("Are you smart?");
    $("#choice1").text("Totally");
    $("#choice2").text("Kind of");
    $("#choice3").text("Nah");
  }
    else if(current===1){
    $("h2").text("Are you funny?");
    $("#choice1").text("Pretty funny");
    $("#choice2").text("So so");
    $("#choice3").text("No jokes, only work");
  }
  else if(current===2){
    $("h2").text("Family?");
    $("#choice1").text("All the way");
    $("#choice2").text("Don't care");
    $("#choice3").text("No thanks");
  }
  else if(current ===3){
    character(total);
  }
  else if(current ===4){  
    $("h2").text("Are you smart?");
    $("#choice1").text("Totally");
    $("#choice2").text("Kind of");
    $("#choice3").text("Nah");
    $("button").show();
    current = 0;
    total = 0;
  }
  else {
    alert("You are done, refresh if you want to play again"); //create a button that restarts the quiz
  }
}

$("#choice1").on("click", function(){
  if(current === 0){ //change values so each unique response has different outcomes
    total += 100;
  }
  else if (current === 1){
    total+=10;
  }
  else if(current===2){
    total +=1;
  }

  current += 1;
  changeQuestion();
  console.log(total);
  console.log(current);
})

$("#choice2").on("click", function () {
  if (current === 0) { //change values so each unique response has different outcomes
    total += 200; 
  }
  else if (current === 1) {
    total += 20;
  }
  else if (current === 2) {
    total += 2;
  }

  current += 1;
  changeQuestion();
  console.log(total);
  console.log(current);
})

$("#choice3").on("click", function () {
  if (current === 0) { //change values so each unique response has different outcomes
    total += 300;
  }
  else if (current === 1) {
    total += 30;
  }
  else if (current === 2) {
    total += 3;
  }

  current += 1;
  changeQuestion();
  console.log(total);
  console.log(current);
})
