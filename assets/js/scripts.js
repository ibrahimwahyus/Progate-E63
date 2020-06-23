const Toggle = document.querySelector ('.toggle input'); 
const nav = document.querySelector ('nav ul');

Toggle.addEventListener ('click', function() {
	nav.classList.toggle('slide');
});

//  sub menu drop

document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}