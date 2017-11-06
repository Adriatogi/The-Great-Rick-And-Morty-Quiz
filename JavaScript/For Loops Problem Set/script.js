for (var i = -10; i <= 19; i++) {
	console.log(i);
}
console.log("End 1");

// V 1.0 
// for (var i = 10; i <== 40; i+=2) { // did it by adding by two because it is faster and less lines
// 	console.log(i);
// }
// console.log("End 2");

//V 2.0
for (var i = 10; i <= 40; i+=2) { // actually checks if it is even
	if (i%2 === 0) {
		console.log(i);
	}
}
console.log("End 2");

for (var i = 300; i <= 333; i++) {
	if (i%2 !== 0) {
		console.log(i);
	}
}
console.log("End 3");

for (var i = 5; i <= 50; i++) {
	if (i%5 === 0 && i%3 === 0) {
		console.log(i);
	}
}
console.log("End 4");