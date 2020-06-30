
// panggil menu burger
const Toggle = document.querySelector ('.toggle input'); 
const nav = document.querySelector ('nav ul');

Toggle.addEventListener ('click', function() {
	nav.classList.toggle('slide');
});



