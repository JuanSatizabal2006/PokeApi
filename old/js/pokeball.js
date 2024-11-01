document.addEventListener("DOMContentLoaded", function () {
    const url = "https://pokeapi.co/api/v2/item/";

    fetch(url)
        .then((response) => response.json())
        .then(async (data) => {
            // Filtrar solo las Poké Balls en la lista de ítems
            const pokeballs = data.results.filter((item) => item.name.includes("ball"));

            // Crear un contenedor para mostrar los detalles de las Poké Balls
            const pokeballDetailsContainer = document.getElementById("pokeball-details");

            // Iterar sobre las Poké Balls y obtener los detalles
            for (const pokeball of pokeballs) {
                const pokeballUrl = pokeball.url;
                const pokeballResponse = await fetch(pokeballUrl);
                const pokeballData = await pokeballResponse.json();

                const nombre = pokeballData.name;
                const shortEffect = pokeballData.effect_entries[0].short_effect;

                // Obtener la imagen de la Poké Ball
                const imagenUrl = pokeballData.sprites.default;

                const pokeballDiv = document.createElement("div");
                pokeballDiv.classList.add("pokeball");

                const nombreElement = document.createElement("h1");
                nombreElement.classList.add("title_pokeball");
                
                nombreElement.textContent = nombre;
                pokeballDiv.appendChild(nombreElement);

                const imagenElement = document.createElement("img");
                imagenElement.src = imagenUrl;
                imagenElement.alt = nombre;
                imagenElement.classList.add("img_pokeball")
                pokeballDiv.appendChild(imagenElement);
                

                const shortEffectElement = document.createElement("p");
                shortEffectElement.textContent =  shortEffect;
                shortEffectElement.classList.add("p_pokeball");
                pokeballDiv.appendChild(shortEffectElement);

                pokeballDetailsContainer.appendChild(pokeballDiv);
            }
        })
        .catch((error) => {
            console.error("Error al obtener la información de las Poké Balls:", error);
        });
});