const $navBarBurger = document.querySelector(".navbar-burger")
const $navBar = document.querySelector("#navbar125sdf")



$navBarBurger.addEventListener("click",(evt)=>{

	$navBar.classList.toggle("is-active");
});