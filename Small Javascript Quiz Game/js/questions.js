var total = 0;
var current = 0;
$("#result").hide();

function restart() {
  $("#result").slideUp("fast");
  $("h2").text("Are you smart?");
  $("#choice1").text("Totally");
  $("#choice2").text("Kind of");
  $("#choice3").text("Nah");
  $("button").show();
  $("#picture img:last-child").remove();
  $('#quote').empty();
  $("#questionDisplay").show();
  $("#question").text("Question 1");
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
      $("h2").text("Your character is Rick Sanchez");
      $('#picture').prepend('<img id="rick" src=pictures/Rick.png />')
      $('#quote').prepend('&#8220;Weddings are basically funerals with cake&#8221;- Rick Sanchez')
      break;
    case 211:
      $("h2").text("Your character is Morty Smith");
      $('#picture').prepend('<img id="morty" src=pictures/Morty.png />')
      $('#quote').prepend("&#8220;Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV&#8221;- Morty Smith")
      break;
    case 311:
      $("h2").text("Your character is Mr. Poopybutthole");
      $('#picture').prepend('<img id="poopy" src=pictures/Poopy.png />')
      $('#quote').prepend('&#8220;Oo-wee!&#8221;- Mr. Poopybutthole')
      break;
    case 121:
      $("h2").text("Your character is the Cromulons");
      $('#picture').prepend('<img id="cromulons" src=pictures/Cromulons.png />')
      $('#quote').prepend('&#8220;SHOW ME WHAT YOU GOT! I WANT TO SEE WHAT YOU GOT!&#8221;- Cromulons')
      break;
    case 221:
      $("h2").text("Your character is Summer Smith");
      $('#picture').prepend('<img id="summer" src=pictures/Summer.png />')
      $('#quote').prepend('&#8220;Boo-ya&#8221;- Summer Smith')
      break;
    case 321:
      $("h2").text("Your character is Jerry Smith");
      $('#picture').prepend('<img id="jerry" src=pictures/Jerry.png />')  
      $('#quote').prepend("&#8220;LIFE IS EFFORT AND I'LL STOP WHEN I DIE&#8221;- Jerry Smith")
      break;
    case 131:
      $("h2").text("Your character is Ma-Sha");
      $('#picture').prepend('<img id="maSha" src=pictures/MaSha.png />')  
      $('#quote').prepend('&#8220;I am here if you need to talk&#8221;- Ma-Sha')
      break;
    case 231:
      $("h2").text("Your character is Beth Smith");
      $('#picture').prepend('<img id="beth" src=pictures/Beth.png />')  
      $('#quote').prepend('&#8220;Who wants to go run in a stream?&#8221;- Beth Smith')
      break;
    case 331:
      $("h2").text("Your character is Jaguar");
      $('#picture').prepend('<img id="jaguar" src=pictures/Jaguar.png />') 
      $('#quote').prepend('&#8220;Where is this pickle?&#8221;- Jaguar')
      break;
    case 112:
      $("h2").text("Your character is Birdperson");
      $('#picture').prepend('<img id="bird" src=pictures/Bird.png />') 
      $('#quote').prepend('&#8220;In bird culture, this is considered a dick move&#8221;- Birdperson')
      break;
    case 212:
      $("h2").text("Your character is the Alien Parasites");
      $('#picture').prepend('<img id="parasites" src=pictures/Parasites.png />') 
      $('#quote').prepend("&#8220;Like we say in Brooklyn...we're walkin' here!&#8221;— Cousin Nicky")
      break;
    case 312:
      $("h2").text("Your character is Hemorrhage");
      $('#picture').prepend('<img id="hemorrhage" src=pictures/Hemorrhage.png />') 
      $('#quote').prepend('&#8220;I can shave it&#8221;- Hemorrhage')
      break;
    case 122:
      $("h2").text("Your character is Snuffles");
      $('#picture').prepend('<img id="snuffles" src=pictures/Snuffles.png />')  
      $('#quote').prepend('&#8220;Where are my testicles, Summer?&#8221;- Snuffles')
      break;
    case 222:
      $("h2").text("Your character is King Flippy Nips");
      $('#picture').prepend('<img id="flippy" src=pictures/Flippy.png />')  
      $('#quote').prepend("&#8220;Pluto's a fucking planet, BITCH!&#8221;- King Flippy Nips")
      break;
    case 322:
      $("h2").text("Your character is Mr. Goldenfold");
      $('#picture').prepend('<img id="golden" src=pictures/Golden.png />')  
      $('#quote').prepend("&#8220;Now look, we're going to be dealing with some real serious stuff today. If you haven't heard of it it's called math! And without it, none of us would even exist&#8221;- Mr. Goldenfold")
      break;
    case 132:
      $("h2").text("Your character is Unity");
      $('#picture').prepend('<img id="unity" src=pictures/Unity.png />')  
      $('#quote').prepend('&#8220 I have transformed life here into a paradise. Prostitutes are now scientists. The homeless are now phisosophers&#8221;- Unity')
      break;
    case 232:
      $("h2").text("Your character is Krombopulos Michael");
      $('#picture').prepend('<img id="krom" src=pictures/Krom.png />')  
      $('#quote').prepend("&#8220;I'm very discreet. I have no code of ethics. I will kill anyone, anywhere. Children, animals, old people, doesn't matter. I just love killing&#8221;- Krombopulos Michael")
      break;
    case 332:
      $("h2").text("Your character is Morty Smith Jr.");
      $('#picture').prepend('<img id="jr" src=pictures/Jr.png />')  
      $('#quote').prepend('&#8220;I like to dance... on the graves of my enemies&#8221;- Morty Smith Jr.')
      break;
    case 113:
      $("h2").text("Your character is Squanchy");
      $('#picture').prepend('<img id="squanch" src=pictures/Squanch.png />')  
      $('#quote').prepend("&#8220;Squanchin' party bro!&#8221;- Squanchy")
      break;
    case 213:
      $("h2").text("Your character is Mr. Meeseeks");
      $('#picture').prepend('<img id="meeseeks" src=pictures/meeseeks.png />')  
      $('#quote').prepend("&#8220;I'm Mr. Meeseeks! Look at me!&#8221;- Mr. Meeseeks")
      break;
    case 313:
      $("h2").text("Your character is Noob-Noob");
      $('#picture').prepend('<img id="noob" src=pictures/Noob.png />')  
      $('#quote').prepend('&#8220;Gawd Damn!&#8221;- Noob-Noob')
      break;
    case 123:
      $("h2").text("Your character is Dr. Xenon Bloom");
      $('#picture').prepend('<img id="doctor" src=pictures/Doctor.png />')  
      $('#quote').prepend('&#8220;The digestive tract is the evacuation route. Get it?&#8221;- Dr. Xenon Bloom')
      break;
    case 223:
      $("h2").text("Your character is Doofus Rick");
      $('#picture').prepend('<img id="doofus" src=pictures/Doofus.png />')  
      $('#quote').prepend('&#8220;Hey! I don’t eat poop! Y-you guys are always so mean to me!&#8221;- Doofus Rick')
      break;
    case 323:
      $("h2").text("Your character is Ants in my Eyes Johnson");
      $('#picture').prepend('<img id="johnson" src=pictures/Johnson.png />')  
      $('#quote').prepend("&#8220;'m Ants in my Eyes Johnson, everything's black, I can't see a thing, and I also can't feel anything either!&#8221;- Ants in my Eyes Johnson")
      break;
    case 133:
      $("h2").text("Your character is Evil Morty");
      $('#picture').prepend('<img id="evil" src=pictures/Evil.png />')  
      $('#quote').prepend('&#8220;This seems like a good time for a drink, and a cold calculated speech with sinister overtones. A speech about politics, about order, brotherhood, power. But speeches are for campaigning. Now is the time for action.&#8221;- Evil Morty')
      break;
    case 233:
      $("h2").text("Your character is Revolio Clockberg, Jr.");
      $('#picture').prepend('<img id="gear" src=pictures/Gear.png />')  
      $('#quote').prepend('&#8220Calling me Gearhead is like calling a Chinese person Asia face!&#8221;- Revolio Clockberg, Jr.')
      break;
    case 333:
      $("h2").text("Your character is Abradolf Lincler");
      $('#picture').prepend('<img id="abradolf" src=pictures/Abradolf.png />')  
      $('#quote').prepend('&#8220;Prepare to be emancipated from your own inferior genes!&#8221;- Abradolf Lincler')
      break;
  }
}

function changeQuestion(){
  if(current ===0){
    $("h2").text("Are you smart?");
    $("#choice1").text("Totally");
    $("#choice2").text("Kind of");
    $("#choice3").text("Nah");
    $("#question").text("Question 1");
  }
    else if(current===1){
    $("h2").text("Are you funny?");
    $("#choice1").text("Pretty funny");
    $("#choice2").text("So so");
    $("#choice3").text("Not really");
    $("#question").text("Question 2");
  }
  else if(current===2){
    $("h2").text("Do you value family?");
    $("#choice1").text("All the way");
    $("#choice2").text("A little");
    $("#choice3").text("No thanks");
    $("#question").text("Question 3");
  }
  else if(current ===3){
    character(total);
    restartButtons();
    $("#result").slideDown();
    $("#questionDisplay").hide();
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

$(".buttonChoice").hover(
  function(){$(this).toggleClass('scale-up'), 
  function(){$(this).toggleClass('scale-down')
   }
 })

$("#restartButton").on("click", function(){
  restart();
})