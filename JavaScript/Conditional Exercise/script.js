var age = Number(prompt("Welcome, how old are you?"));

if (age < 0) {
	console.log("That is not possible. Don't lie to me!");
}

else if (age < 18) {
	console.log("Sorry, you are not old enough to enter the venue");
	if ( age > 0 && Math.sqrt(age) %1 === 0) {
		console.log("Your age is a perfect square");
	}
	if (age%2 !== 0) {
		console.log("Your age is odd");
	}
}

else if (age === 21) {
	console.log("Happy 21st birthday! You are welcome in!");
}

else if (age < 21) {
	console.log("You can enter, but you can't drink.");
	if ( age > 0 && Math.sqrt(age) %1 === 0) {
		console.log("Your age is a perfect square");
	}
	if (age%2 !== 0) {
		console("Your age is odd");
	}
}

else {
	console.log("Come on in. You are allowed to drink.");
	if ( age > 0 && Math.sqrt(age) %1 === 0) {
		console.log("Your age is a perfect square");
	}
	if (age%2 !== 0) {
		console.log("Your age is odd");
	}
}