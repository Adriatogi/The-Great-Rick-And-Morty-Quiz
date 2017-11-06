function isEven(val) {
	if (val%2 == 0){
		return true;
	}
	return false
}
console.log("Function 1");
console.log(isEven(6));
console.log(isEven(25));
console.log("Works");


function factorial(val) {
	if (val == 1 || val == 0) {
 		return 1;
 	}
 	else {
 		return val * factorial(val-1);
 	}
}

// function factorial (num){ // This is how the teacher did it. I did it differently because less lines of code and is faster
// 	if (num === 0){
// 		return 1;
// 	}
// 	var result = 1;
// 	for (var i = 2; i <= num; i++) {
// 		result *=i;
// 	}
// 	return result;
// }
 console.log("Function 2");
 console.log(factorial(2));
 console.log(factorial(5));
 console.log("Works");


function kebabToSnake(string) {
	var newStr=string.replace(/-/g, "_");
	return newStr;
}

 console.log("Function 3");
 console.log(kebabToSnake("hello-world"));
 console.log(kebabToSnake("blah"));
 console.log("Works");