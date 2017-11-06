//If you plan on adding this to your portfolio, add personal touches
var numOfSquares = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all squares and change them to pickedColor
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

function generateRandomColors(num){
 //make an array
 var arr = [];

 //add num random colors to aray
for (var i = 0; i < num; i++) {
  //get random color and push to arr
  arr.push(randomColor())
  
}
 //return that array
 return arr;
}

function randomColor() {
  // pick a red from 0 - 255
  var r =Math.floor(Math.random()*256);// doesnt include 256
  // pick a green from 0 - 255
  var g =Math.floor(Math.random()*256);// doesnt include 256
  // pick a blue from 0 - 255
  var b =Math.floor(Math.random()*256);// doesnt include 256
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
  colors = generateRandomColors(numOfSquares);
  //pick new random color from array
  pickedColor=pickColor();
  //change color display
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelBlue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
}

function init(){
  //mode button event listeners
  setModeButtons();
  setSquares();
  reset();
}

function setModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    })
  }
}

function setSquares (){
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function (){
      //compare color to pickedColor
      var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
          resetButton.textContent = "Play Again?" 
        } else {
          this.style.backgroundColor="#232323";
          messageDisplay.textContent = "Try Again!";
        }
    });
  }
}