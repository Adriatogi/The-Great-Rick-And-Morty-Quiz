var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var  maxScoreDisplay= document.querySelector("#maxValueDisplay");
var p1Score = 0;
var p2Score = 0;
var gameOver = 0;
var maxScore = 5;

function reset () {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");  
  p2Display.classList.remove("winner");
  gameOver = 0;
}

p1Button.addEventListener("click", function() {
  if(!gameOver){
    p1Score++;
    if(p1Score === maxScore){
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver){
    p2Score++;
    if(p2Score === maxScore){ 
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

numInput.addEventListener("change", function(){
  maxScoreDisplay.textContent = this.value;
  maxScore = Number(this.value);
  reset();
})