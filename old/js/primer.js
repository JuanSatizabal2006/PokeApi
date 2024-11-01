/* Variables para el boton e input de buscar*/
let button_search = document.querySelector('#button_search');
let search_input = document.querySelector('#search_input');
/* Variables para la caja de filtros */
let button_filter = document.querySelector('#button_filters');
let box_filter = document.querySelector('#box_filters');


/* Evento de click para input buscar*/
button_search.addEventListener('click',()=>{
    search_input.classList.toggle('search_input_visible');
});

//Evento responsive, para que salga el boton para poder aplicar los filtros
if(screen.width < 380){
    button_filter.addEventListener('click', ()=>{
        box_filter.classList.toggle('container_filters_visible');
    }); 
}
