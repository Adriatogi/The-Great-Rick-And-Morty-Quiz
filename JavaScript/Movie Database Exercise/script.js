var movieDB =[{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Django",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Spider-Man: Homecoming",
		rating: 4.5,
		hasWatched: true
	}
]

function buildString (movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result +="\""+ movie.title+"\" - ";
	result += movie.rating+" stars";
	return result
}

movieDB.forEach(function(movie){
	console.log(buildString(movie))
})