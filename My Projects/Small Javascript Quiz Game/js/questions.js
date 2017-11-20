var total = 0;
var current;
function changeQuestion(){
  if(current===2){

  }
  else if(current===3){

  }
  else {
    alert("error");
  }
}

$("#choice1").on("click", function(){
  total+=1;
  current+=1;
  console.log(total);
})

$("#choice2").on("click", function () {
  total += 2;
  current += 1;
  console.log(total);
})

$("#choice3").on("click", function () {
  total += 3;
  current += 1;
  console.log(total);
})
