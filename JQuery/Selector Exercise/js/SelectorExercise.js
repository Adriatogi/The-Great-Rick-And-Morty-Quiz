$("div").css("background", "purple"); //create background purple of all divs
$(".highlight").css("width", "200px"); //create width of highlight class 200 pixels
$("#third").css("border", "3px solid orange"); //create the id of third to have an orange border
$("div:first-of-type").css("color", "pink"); // pick the first div and make it a pink font
//could use $("div:first").css("color", "pink"); Unfortunately, it is slower because div:first is not built into css
