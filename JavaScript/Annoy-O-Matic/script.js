// Version 1.0
// var question;
// var converted;
// var there = false;

// while (there === false) {
// 	question = prompt("Are we there yet?");
// 	converted = question.toLowerCase();
// 	if (converted == "yes" || converted == "yeah") {
// 		there = true;
// 		alert("Yay, we finally made it!");
// 	}
// }

//Version 2.0
var answer = prompt("are we there yet?").toLowerCase();
while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) { // -1 means it was not found
 var answer = prompt("are we there yet?");
}
alert("YAY, WE MADE IT!!!");