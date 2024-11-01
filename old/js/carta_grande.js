window.addEventListener("load", (event) => {   
    const url = event.target.baseURI;
    const id = url.split('idPokemon=')[1]
    openDetails(id)

});

const openDetails = (id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json()).then((data) => {
        loadDetails(data, id);
    })
}

const loadDetails = async (pokeDetail)=>{
    //Insertar el nombre del pokemon en el titulo de la pestaña
    const title = document.querySelector("#title_tab");
    title.textContent = `${pokeDetail.name}`.toUpperCase();

    const main = document.querySelector("#main_details_poke");

    //Acomodamos el numero del pokemon, depende de la cantidad de numero que tenga añadimos "0" o no
    let idPoke = pokeDetail.id;
    idPoke = idPoke.toString();
    if(idPoke.length === 2){
        idPoke = "0" + idPoke;
    }
    else if(idPoke.length === 1){
        idPoke = "00" + idPoke;
    }

    //Variable que guardará el primer tipo del pokemon
    let categoriaColorDetail = pokeDetail.types[0].type.name;
    const pokeDetailDiv = document.createElement("div");
    const statsPoke = ["PS:", "ATAQUE:","DEFENSA:","VELOCIDAD:","DEFENSA ESPECIAL:","ATAQUE ESPECIAL:"];
    const statsInfo = ["GENERACIÓN:", "PESO:","ALTURA:","CATEGORIA:"];
    let structure_html_poke = `   
        <div class="container_big_pokemon" id="pokemon_detail">

        <!--Caja contenedora del lado lateral izquierdo de la vista grande del pokemon-->
        <div class="container_big_pokemon_title-stats">

            <!--Caja donde se muestra el nombre del pokemon-->
            <div class="box_big_pokemon_title before_${categoriaColorDetail}">
                <h3 class="big_pokemon_title">${pokeDetail.name}</h3>
                <p class="big_pokemon_title-text">#${idPoke}</p>  
            </div>

            <!--Caja donde se muestran las estadisticas del pokemon, estadisticas posicionadas en la esquina inferior izquierda-->
            <div class="box_big_pokemon_stats">
                <div class="big_pokemon_stats">
            `;
            //Ciclo con las estadisticas de los pokemones
            for(let i = 0; i < statsPoke.length; i++){structure_html_poke += `<p class="big_pokemon_stats-items">${statsPoke[i]}</p>`}

            structure_html_poke += `
                </div><!--Cerramos la caja con las palabras de la info-->
                <div class="big_pokemon_stats-data"><!--Abrimos caja con la data de las estadisticas-->
            `;

            for(let i = 0; i < statsPoke.length; i++){structure_html_poke += `<p class="big_pokemon_stats_items-data">${pokeDetail.stats[i].base_stat}</p>`};
            
            structure_html_poke += `
                </div>
                <div class="big_pokemon_stats-progress">
            `;

            for(let i = 0; i < statsPoke.length; i++){structure_html_poke += `<progress style="width: ${pokeDetail.stats[i].base_stat/2}px; accent-color: var(--${categoriaColorDetail});" max="${pokeDetail.stats[i].base_stat}" value="${pokeDetail.stats[i].base_stat}" class="stats_items-progress"></progress>`};
            structure_html_poke += `
                    </div>
                </div>    
            </div>
            <!--Caja contenedora de la imagen que va en el centro de toda la vista, imagen del pokemon-->

            <div class="container_big_pokemon_img">
                <!--Caja que tendra el degradado de fondo, padre de todas pues debe estar a la mitad y detras de las imagenes-->
                <div class="box_big_pokemon_img">
    
                    <div class="big_pokemon_degradado degradado_${categoriaColorDetail}"></div> 
    
                    <!--Imagen del pokemon-->
                    <img class="big_pokemon_imagen" src="${pokeDetail.sprites.other["official-artwork"].front_default}"> 
                                    
                    <!--Caja donde estará la imagen del circulo-->
                    <div class="box_big_pokemon_imagen-circulo img_fondo_${categoriaColorDetail}"></div>   
                </div>
    
            </div>
    
            <div class="container_big_pokemon_info ">
    
                <div class="box_big_pokemon_info">

                    <div class="big_pokemon_info">
                `
                for(let i = 0; i < statsInfo.length; i++){structure_html_poke += `<p class="big_pokemon_info-items">${statsInfo[i]}</p>`};

                structure_html_poke += `
                    </div><!--Cierre big_pokemon_info, donde se encuentra las palabras de la informacion (peso,altura...)-->
    
                <div class="big_pokemon_info-data">
                    <p class="big_pokemon_info_items-data span_arreglo">${pokeDetail.game_indices[0].version.name}</p>
                    <p class="big_pokemon_info_items-data">${pokeDetail.weight} KG</p>
                    <p class="big_pokemon_info_items-data">${pokeDetail.height} M</p>
                    <button class="big_pokemon_button fire ${categoriaColorDetail}_c " id="fire">${categoriaColorDetail}</button>
                </div>
            </div>

                <div class="big_pokemon_habilidades before_${categoriaColorDetail}">
                        <h3 class="big_pokemon_habilidades_title">HABILIDADES</h3>
                        <p class="big_pokemon_habilidades_items-data">Ataque rapidos: <span class="span_arreglo">${pokeDetail.abilities[0].ability.name}</span></p>
                        <p class="big_pokemon_habilidades_items-data">Ataque cargados: <span class="span_arreglo">${pokeDetail.abilities[1].ability.name}</span></p>
                </div>
            </div>
        </div>`;
    pokeDetailDiv.innerHTML = structure_html_poke
    main.appendChild(pokeDetailDiv);  
}


//felicidad , entró al gym, quinta terapia dejando los medicamentos, comer bien, diavlo bajó, sexta terapia posible terapia, no hubo dibujos epa