console.log("hello world");

let form = document.querySelector('#contact');
let duckImg = document.querySelector('#duck-img')

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function mouseOverImg() {
	alert('I like your style!')
}


form.addEventListener('submit', handleSubmit);
duckImg.addEventListener('mouseover', mouseOverImg )

