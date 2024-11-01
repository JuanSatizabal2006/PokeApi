//Variables para el menu responsive
let button_menu = document.querySelector("#icon_menu");//Boton para abrir menu
let button_menu_close = document.querySelector("#icon_menu-close");//Boton para cerrar menu
let menu_responsive = document.querySelector(".container_item-search--responsive");

//Eventos para mostrar y ocultar el menu responsive
button_menu.addEventListener('click', ()=>{
    menu_responsive.classList.remove("move_menu");
})

button_menu_close.addEventListener('click',()=>{
    menu_responsive.classList.add("move_menu");
})
