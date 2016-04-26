function gametime(){
	title = document.createTextNode("Here are some of the courses!");
	list = document.createElement("ul");

	item1 = document.createElement("li");
	text1 = document.createTextNode("Analysis and Design of Algorithms")
	item1.appendChild(text1)

	item2 = document.createElement("li")
	text2 = document.createTextNode("Finite Automata Theory")
	item2.appendChild(text2)

	item3 = document.createElement("li")
	text3 = document.createTextNode("Database Management Systems")
	item3.appendChild(text3)

	item4 = document.createElement("li")
	text4 = document.createTextNode("Linear Algebra")
	item4.appendChild(text4)

	// Append the list item inside the unordered list tag
	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);

	divMovies = document.getElementById("dynamicDiv")
	divMovies.appendChild(title)
	divMovies.appendChild(list)
}