//el evento DOMContentLoaded para ejecutar la función function() cuando la página web está completamente cargada.
const imagenesRutas = [// aqui estan las rutas de las imagenes en un array 
        'url(../assets/img/Location/180px-Oreburgh_Mine_B1F_Pt.png)',
        'url(../assets/img/Location/41-inside.png)',
        'url(../assets/img/Location/742px-Sunyshore_City.png)',
        'url(../assets/img/Location/canalave-city-area-preview.png)',
        'url(../assets/img/Location/create-pokemon-maps-in-3rd-generation-style.jpeg.png)',
        'url(../assets/img/Location/descarga.jpeg.png)',
        'url(../assets/img/Location/eterna-city-area-preview.webp)',
        'url(../assets/img/Location/mtcoronet2f.png)',
        'url(../assets/img/Location/mtcoronet3f.png)',
        'url(../assets/img/Location/mtcoronet4f.png)',
        'url(../assets/img/Location/mtcoronet5f.webp)',
        'url(../assets/img/Location/mtcoronet6f.png)',
        'url(../assets/img/Location/mtcoronet7f.png)',
        'url(../assets/img/Location/mtcoronetsnowing.png)',
        'url(../assets/img/Location/mtcoronetsouth.png)',
        'url(../assets/img/Location/pastoria-city-area-preview.png)',
        'url(../assets/img/Location/show.jpeg.png)',
        'url(../assets/img/Location/show.png)',
        'url(../assets/img/Location/Pueblo_Azalea_OPC.png)',
        'url(../assets/img/Location/Route_1.jpg)',
    ];
const imagenesRutas2 = [// aqui estan las rutas de las imagenes en un array 
    '../assets/img/Location/180px-Oreburgh_Mine_B1F_Pt.png',
    '../assets/img/Location/41-inside.png',
    '../assets/img/Location/742px-Sunyshore_City.png',
    '../assets/img/Location/canalave-city-area-preview.png',
    '../assets/img/Location/create-pokemon-maps-in-3rd-generation-style.jpeg.png',
    '../assets/img/Location/descarga.jpeg.png',
    '../assets/img/Location/eterna-city-area-preview.webp',
    '../assets/img/Location/mtcoronet2f.png',
    '../assets/img/Location/mtcoronet3f.png',
    '../assets/img/Location/mtcoronet4f.png',
    '../assets/img/Location/mtcoronet5f.webp',
    '../assets/img/Location/mtcoronet6f.png',
    '../assets/img/Location/mtcoronet7f.png',
    '../assets/img/Location/mtcoronetsnowing.png',
    '../assets/img/Location/mtcoronetsouth.png',
    '../assets/img/Location/pastoria-city-area-preview.png',
    '../assets/img/Location/show.jpeg.png',
    '../assets/img/Location/show.png',
    '../assets/img/Location/Pueblo_Azalea_OPC.png',
    '../assets/img/Location/Route_1.jpg',
    ];
const url = "https://pokeapi.co/api/v2/location-area/";
const container_modal = document.querySelector(".all_container_modal");
document.addEventListener("DOMContentLoaded",  async () =>{

    await fetch(url)
        .then((response) => response.json())
        .then((data) => mostrar_locacion(data));
});

const mostrar_locacion = (dataLocate)=>{
    let recorrido = 0;
    let numID = 1;
    const ubicaciones = dataLocate.results;//almacena la lista de ubicaciones en la variable ubicaciones
    const ubicacionesDiv = document.getElementById("all_location");//obtiene el elemento div con el ID all_location

    //inicia un bucle for que recorrerá cada ubicación en la lista ubicaciones.
    ubicaciones.forEach((ubicacion) => {
        const ubicacionDiv = document.createElement("div");//crea un nuevo elemento div
        ubicacionDiv.classList.add("ubicacion");//agrega la clase ubicacion al nuevo elemento div.
        ubicacionDiv.style.backgroundImage = `${imagenesRutas[recorrido]}`;

        ubicacionDiv.innerHTML = `
        <div class="box_name_location">
            <p class="name_location" id="${numID}" onclick="obtener_modal(this)">${ubicacion.name}</p>
        </div>
        `
        ubicacionesDiv.appendChild(ubicacionDiv); //agrega el elemento div al elemento div padre.
        numID++
        recorrido++;
    });

}

const mostrar_modal = (locateData)=>{

    let url_poke = [
        locateData.pokemon_encounters[0].pokemon.url,
        locateData.pokemon_encounters[1].pokemon.url,
        locateData.pokemon_encounters[2].pokemon.url
    ];

    // Crear un array de promesas para las solicitudes de imágenes de Pokémon
    let imagePromises = url_poke.map((url) => {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => data.sprites.other["official-artwork"].front_default);
    });

    // Esperar a que se resuelvan todas las promesas de imágenes
    Promise.all(imagePromises)
        .then((imageUrls) => {
            let structure_html_location = `
                <div class="container_modal">
                    <i class="fa-regular fa-circle-xmark" id="icon_close_modal" onclick="cerar_modal()"></i>
                    <h3 class="info-item--h3">${locateData.names[0].name}</h3>
                    <div class="box_modal">

                        <div class="box_modal_img"><!--IMAGEN DE LA LOCACION-->
                            <img src="${imagenesRutas2[locateData.id - 1]}" alt="" class="modal_img">
                        </div>

                        <div class="box_modal_info">
                            <p class="info-item--p">Pokemones de la zona</p>
                            <div class="info-item_pokemones">
                                <div class="item_pokemones--div">
                                    <div class="item_pokemones--box_img">
                                        <img src="${imageUrls[0]}" alt="${locateData.pokemon_encounters[0].pokemon.name}" class="item_pokemones--img">
                                        <p>${locateData.pokemon_encounters[0].pokemon.name}</p>
                                    </div>
                                    <div class="item_pokemones--box_img">
                                        <img src="${imageUrls[1]}" alt="${locateData.pokemon_encounters[2].pokemon.name}" class="item_pokemones--img">
                                        <p>${locateData.pokemon_encounters[1].pokemon.name}</p>
                                    </div>
                                    <div class="item_pokemones--box_img">
                                        <img src="${imageUrls[2]}" alt="${locateData.pokemon_encounters[1].pokemon.name}" class="item_pokemones--img">
                                        <p>${locateData.pokemon_encounters[2].pokemon.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="arcoiris"></div>
                </div>
            `;

            // Resto de tu código para mostrar el modal
            container_modal.innerHTML = structure_html_location;
        })
        .catch((error) => {
            console.error("Error al obtener imágenes de Pokémon:", error);
        });

        abrir_modal();
}

//MODAL
const obtener_modal = async (id_elemento)=>{
    let id_locacion = id_elemento.id
    await fetch(url + id_locacion).then((response) => response.json()).then((data) => mostrar_modal(data));
}

const abrir_modal = ()=>{
    container_modal.classList.add("mostrar_modal");
}

const cerar_modal = ()=>{
    container_modal.classList.remove("mostrar_modal");
}