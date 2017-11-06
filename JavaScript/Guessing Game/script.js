var guess;
var	number = 7;

	guess = Number(prompt("Please enter a number"));

	if (guess === number) {
		alert("Congratulations, you got the correct number");
	}

	else if (guess > number) {
		alert("Too high. Try again");
	}

	else if (guess < number) {
		alert("guess low. Try again");
	}

	else {
		alert("Error. Please enter a number");
	}

alert("Done");