var number;

number = -10;
while	(number<20) {
	console.log(number);
	number++;
}
console.log("End 1");

number = 10;
while	(number<=40) {
	console.log(number);
	number+=2; // instead of using an if statement. i did it like this because it requires less lines of code
}
console.log("End 2");

number = 300
 while (number<334) {
 	if (number%2 !== 1) {
 		console.log(number);
 	}
 	number++;
 }
 console.log("End 3");

number = 5;
while (number<==50) {
	if (number%5===0 && number%3===0) {
		console.log(number)
	}
	number++;
}
console.log("End 4");