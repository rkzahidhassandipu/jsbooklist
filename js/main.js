const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const booklist = document.querySelector(".book-list");


btn.addEventListener("click", function(e){
	e.preventDefault();
	if (title.value == "" || author.value == "" || year.value == "") {
		alert("Empty your input!!  Please type now...");
	}
	else{
		const newRow = document.createElement("tr");


		const newtitle = document.createElement("td");
		newtitle.innerHTML = title.value;
		newRow.appendChild(newtitle);


		const newauthor = document.createElement("td");
		newauthor.innerHTML = author.value;
		newRow.appendChild(newauthor);


		const newyear = document.createElement("td");
		newyear.innerHTML = year.value;
		newRow.appendChild(newyear);

		booklist.appendChild(newRow);
		// const newRow = document.createElement("tr");
		// const newRow = document.createElement("tr");
	}
});