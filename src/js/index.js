var menu = document.querySelector('.menu');
var pop = document.querySelector('.pop_menu');
var body = document.querySelector('body');

menu.addEventListener("click",function(){
	menu.classList.toggle("click");
	pop.classList.toggle("open");
	body.classList.toggle("scroll");
});