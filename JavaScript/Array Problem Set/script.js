function printReverse(arr){
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse(["a","b","c"]);

function isUniform(arr){
	var item = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i]!==item){
			return console.log(false);
		} 
	}
	return console.log(true);
}


isUniform(["a","b","a"]);
isUniform(["a","a","a"]);

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(element){
		sum += element;
	});
	return console.log(sum);
}

sumArray([1,2,1,3]);

function max(arr){
	var maxNum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (maxNum < arr[i]) {
			maxNum = arr[i];
		}
		else{}
		return console.log(maxNum);
	}
}

max([0,100,-20,50]);