console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Submitted Successfully!")
}

function imgComp (e) {
	e.preventDefault();
	alert("Savvy, I know I'm Handsome... no need to linger")
}

document.getElementById("duck-image").addEventListener("mouseover", imgComp);

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);