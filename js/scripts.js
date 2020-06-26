
// Klik menu navbar

 $('.page-scroll').on('click', function(e) { 

 	// ambil isi href
 	var tujuan = $(this).attr('href'); 

 	// tangkap element yang bersangkutan
 	var elemenTujuan = $(tujuan); 

 	// Pindahkan scroll
 	$('html , body').animate({ 
 		scrollTop: elemenTujuan.offset().top - 50 

 	}, 1250, 'easeInOutExpo'); 

 	e.preventDefault(); 

 });﻿




// panggil menu burger
const Toggle = document.querySelector ('.toggle input'); 
const nav = document.querySelector ('nav ul');

Toggle.addEventListener ('click', function() {
	nav.classList.toggle('slide');
});



