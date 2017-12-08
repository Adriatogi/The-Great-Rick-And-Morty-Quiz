var total = 0;
var current = 0;

function restart() {
  $("h2").text("Are you smart?");
  $("#choice1").text("Totally");
  $("#choice2").text("Kind of");
  $("#choice3").text("Nah");
  $("button").show();
  $("#picture img:last-child").remove()
  current = 0;
  total = 0;
}
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
      $("h2").text("You're character is Rick Sanchez");
      restartButtons();
      $('#picture').prepend('<img id="rick" src=pictures/Rick.png />')
      break;
    case 211:
      $("h2").text("You're character is Morty Smith");
      restartButtons();
      $('#picture').prepend('<img id="morty" src=pictures/Morty.png />')
      break;
    case 311:
      $("h2").text("You're character is Mr. Poopybutthole");
      restartButtons();
      $('#picture').prepend('<img id="Poopy" src=pictures/Poopy.png />')
      break;
    case 121:
      $("h2").text("You're character is 121");
      restartButtons();
      break;
    case 221:
      $("h2").text("You're character is Summer Smith");
      restartButtons();
      $('#picture').prepend('<img id="summer" src=pictures/Summer.png />')
      break;
    case 321:
      $("h2").text("You're character is Jerry Smith");
      restartButtons();
      $('#picture').prepend('<img id="jerry" src=pictures/Jerry.png />')
      break;
    case 131:
      $("h2").text("You're character is 131");
      restartButtons();
      break;
    case 231:
      $("h2").text("You're character is Beth Smith");
      restartButtons();
      $('#picture').prepend('<img id="beth" src=pictures/Beth.png />')
      break;
    case 331:
      $("h2").text("You're character is Jaguar");
      restartButtons();
      $('#picture').prepend('<img id="jaguar" src=pictures/Jaguar.png />')
      break;
    case 112:
      $("h2").text("You're character is Birdperson");
      restartButtons();
      $('#picture').prepend('<img id="bird" src=pictures/Bird.png />')
      break;
    case 212:
      $("h2").text("You're character is Alien Parasites");
      restartButtons();
      $('#picture').prepend('<img id="parasites" src=pictures/Parasites.png />')
      break;
    case 312:
      $("h2").text("You're character is 312");
      restartButtons();
      break;
    case 122:
      $("h2").text("You're character is Snuffles");
      restartButtons();
      $('#picture').prepend('<img id="snuffles" src=pictures/Snuffles.png />')
      break;
    case 222:
      $("h2").text("You're character is 222");
      restartButtons();
      break;
    case 322:
      $("h2").text("You're character is Mr. Goldenfold");
      restartButtons();
      $('#picture').prepend('<img id="golden" src=pictures/Golden.png />')
      break;
    case 132:
      $("h2").text("You're character is Unity");
      restartButtons();
      $('#picture').prepend('<img id="unity" src=pictures/Unity.png />')
      break;
    case 232:
      $("h2").text("You're character is Krombopulos Michael");
      restartButtons();
      $('#picture').prepend('<img id="krom" src=pictures/Krom.png />')
      break;
    case 332:
      $("h2").text("You're character is Morty Smith Jr.");
      restartButtons();
      $('#picture').prepend('<img id="jr" src=pictures/Jr.png />')
      break;
    case 113:
      $("h2").text("You're character is Squanchy");
      restartButtons();
      $('#picture').prepend('<img id="squanch" src=pictures/Squanch.png />')
      break;
    case 213:
      $("h2").text("You're character is Mr. Meeseeks");
      restartButtons();
      $('#picture').prepend('<img id="meeseeks" src=pictures/meeseeks.png />')
      break;
    case 313:
      $("h2").text("You're character is Noob-Noob");
      restartButtons();
      $('#picture').prepend('<img id="noob" src=pictures/Noob.png />')
      break;
    case 123:
      $("h2").text("You're character is Dr. Xenon Bloom");
      restartButtons();
      $('#picture').prepend('<img id="doctor" src=pictures/Doctor.png />')
      break;
    case 223:
      $("h2").text("You're character is Doofus Rick");
      restartButtons();
      $('#picture').prepend('<img id="doofus" src=pictures/Doofus.png />')
      break;
    case 323:
      $("h2").text("You're character is Ants in my Eyes Johnson");
      restartButtons();
      $('#picture').prepend('<img id="johnson" src=pictures/Johnson.png />')
      break;
    case 133:
      $("h2").text("You're character is Evil Morty");
      restartButtons();
      $('#picture').prepend('<img id="evil" src=pictures/Evil.png />')
      break;
    case 233:
      $("h2").text("You're character is Revolio Clockberg, Jr.");
      restartButtons();
      $('#picture').prepend('<img id="gear" src=pictures/Gear.png />')
      break;
    case 333:
      $("h2").text("You're character is Abradolf Lincler");
      restartButtons();
      $('#picture').prepend('<img id="abradolf" src=pictures/Abradolf.png />')
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
    $("#choice3").text("Not really");
  }
  else if(current===2){
    $("h2").text("Do you value family?");
    $("#choice1").text("All the way");
    $("#choice2").text("A little");
    $("#choice3").text("No thanks");
  }
  else if(current ===3){
    character(total);
  }
  else if(current ===4){  
    restart();
  }
  else {
    alert("You're done, refresh if you want to play again"); //create a button that restarts the quiz
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

$("#restartButton").on("click", function(){
  restart();
})