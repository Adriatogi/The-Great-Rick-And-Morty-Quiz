$("#fadeDelete").on("click", function () {
  $("div").fadeOut(1000, function(){ //the 1000 is how long it will take in miliseconds
    $(this).remove();
  }); 
});

$("#fadeOut").on("click", function () {
  $("div").fadeOut(1000, function () {
  });
});

$("#fadeIn").on("click", function () {
  $("div").fadeIn(1000, function () {
  });
});

$("#fadeToggle").on("click", function () {
  $("div").fadeToggle(1000, function () {
  });
});

$("#slideDown").on("click", function () {
  $("div").slideDown(1000, function (){
    console.log("Slide Down Succesful")
  });
});

$("#slideUp").on("click", function () { // you can also remove the div just life fade delete button
  $("div").slideUp(1000, function () {
    console.log("Slide Up Succesful")
  });
});

$("#slideToggle").on("click", function () {
  $("div").slideToggle(1000, function () {
    console.log("Slide Toggle Succesful")
  });
});