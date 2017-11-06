var quit = false;
var list = ["test1", "test2"];
while (quit == false) {
	var task = prompt("What would you like to do?").toLowerCase();

	if (task == "new") {
 		newTodo();
	} else if (task == "list") {
		listTodos();
	} else if (task == "delete"){
		deleteTodo();
	} else if (task == "quit") {
		quit = true;
	}
}

function listTodos(){
		console.log("*********");
	list.forEach(function(todo, index){
		console.log(index + ": " + todo);
	})
		console.log("*********");
}

function newTodo(){
	var todo = prompt("What would you like to add to your todo list?");
	list.push(todo);
	console.log(todo + " has been added to the list");
}

function deleteTodo(){
	var index = Number(prompt("Emter index of todo to delete"));
	list.splice(index, 1);
	console.log("Todo deleted");
}