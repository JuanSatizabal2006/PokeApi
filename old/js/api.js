const all_pokemon = document.querySelector("#all_pokemon");
const buttons_filter = document.querySelectorAll(".button_filters_items");
const container_error = document.querySelector(".container_error");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 150; i++){
    fetch(URL + i)//Concatenacion, de la URL mas el numero de pokemon
        .then((response) => response.json())
        .then((data) => mostrarPokemon(data))
};

mostrarPokemon = (pokeData) => {

    //Por medio del metodo MAP, accedemos al array types (tipo/categoria del pokemon)
    //Map recorre ese array type, y en cada posicion del array type accede al propiedad type (que seria el nombre del tipo/categoria)
    //y despues accedemos al nombre, esto se hace asi por la estructura que tiene la API con respecto a sus tipos de pokemon

    let categoria = pokeData.types.map((type) => `<p class="carta_item-categoria ${type.type.name + "_c"}">${type.type.name}</p>`);
    categoria = categoria.join('');//Como map devuelve un array, volvemos ese array en un string
    
    //Variable para SOLO obtener el primer tipo del pokemon, esto nos sirve para cambiar las sombras de las cartas
    let categoria_color = pokeData.types[0].type.name;

    //Condicional para que cada numero de pokemon tenga 3 digitos

    let pokeId = pokeData.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    }else if (pokeId.length === 2){
        pokeId = "0" + pokeId;
    }

    const divPokemon = document.createElement("div");//Crear la caja del pokemon
    divPokemon.classList.add("container_carta_pokemon");//Se le añade la clase para que tenga las propiedades de la caja del pokemon
    divPokemon.classList.add(`categoria_carta_${categoria_color}`);
    divPokemon.setAttribute("id",`${pokeData.name}`);   
    //Estructura que que se va a crear en el HTML:
    divPokemon.innerHTML = `
        <h2 class="carta_name_poke" id="carta_name_poke">${pokeData.name}</h2>
        <div class="container_poke_img">
            <img class="imagen enlace_big" id="${pokeData.id}" src="${pokeData.sprites.other["official-artwork"].front_default}" alt="fondo_poke" onclick=openDetails(${pokeData.id})>
            <img class="poke_img_fondo img_fondo_${categoria_color}">
        </div>
        <div class="carta_info" id="carta_info">
            <div class="carta_info_numero">
                <p>#${pokeId}</p>
            </div>
            <div class="carta_info_categoria"> 
                ${categoria}
            </div>
        </div>    
        <div class="carta_estadisticas estadistica_borde_${categoria_color}">
            <p class="hp">HP:${pokeData.stats[0].base_stat}</p>
            <p class="att">ATT:${pokeData.stats[1].base_stat}</p>
            <p class="def">DEF:${pokeData.stats[2].base_stat}</p>
        </div>
    `;
    all_pokemon.append(divPokemon);
};

//Botones para filtrar los pokemones

//Recorremos los botones por medio de un ForEach, cada boton tendra una llamada de evento click
//cuando le damos click a ese boton guardamos el id del boton (el tipo de pokemon)

buttons_filter.forEach(boton => boton.addEventListener("click", (event)=>{
    const botonId = event.currentTarget.id;
    console.log(botonId);
    all_pokemon.innerHTML = "";//Vaciar el HTML

    for (let i = 1; i < 151; i++){
        fetch(URL + i)
            .then((response) => response.json())
            .then((data) => {

                if(botonId === "see-all"){//Boton para ver a todos los pokemones
                    mostrarPokemon(data);
                }else{
                    //Por medio del metodo map, guardamos en un array el tipo de pokemon, ya sea uno o dos
                    const tipos = data.types.map(type => type.type.name);
                    //["poison", "bug"]
                    if(tipos.some(tipo => tipo.includes(botonId))){
                        //Verificamos si aquel valor es igual al id del boton al cual dimos click
                        //De ser asi mostramos los pokemones que cumplan, de lo contrario no.
                        mostrarPokemon(data);
                    } 
                }
               
            })
    }
}));

//<-------Input de busqueda------->

document.addEventListener("keyup", e => {
    const carta = document.querySelectorAll(".container_carta_pokemon");//Todas las cartas en una variable
    if (e.target.matches("#search_input")) {//Comprobamos si el usuario esta escribiendo en el input
        carta.forEach(name_id => {//Recorremos las cartas
            if (name_id.id.includes(e.target.value.toLowerCase())) {
                //Aqui lo que pasa es que: accedemos al ID de la carta (nombre del pokemon) y verificamos
                //Si ese id está incluido en lo que está escribiendo el usuario, el includes nos devuelve dos estados
                //True o false...
                name_id.classList.remove("no_ver");
                //De ser True no le aplicamos la clase no_ver (Esta clase tiene como propiedad display:none)
            } else {
                name_id.classList.add("no_ver");
            }
        });

        //Si no hay ningun pokemon que concuerda entonces salta el mensaje de error
        const hiddenCartas = document.querySelectorAll(".container_carta_pokemon.no_ver");
        
        if (hiddenCartas.length === carta.length) {
            container_error.style.display = "flex";
            console.log("No se encuentra");
        } else {
            container_error.style.display = "none"; // Ocultar el mensaje de error si hay coincidencias
        }
    }
});

/* REDIRECCION A LA PAGINA GRANDE DEL POKEMON */
const openDetails = (id)=>{     
    //../../API Clase/js/carta_grande.js
    window.open(`../pages/carta_grande.html?idPokemon=${id}`);
}


