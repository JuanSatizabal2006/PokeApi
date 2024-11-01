let URL2 = "https://pokeapi.co/api/v2/pokemon/";
let respuesta = "";
//Boton para empezar el quiz
const boton_inicio = document.querySelector("#button_start");

//Caja padre que contiene los primeros botones, se hace para ocultarla cuando empecemos el quiz
const contenedor_inicio = document.querySelector(".container_button");

//Caja padre donde se contiene lo mas importante, el quiz en si
const quiz = document.querySelector(".container_quiz");

//OPCIONES:
const option1 = document.getElementById("option0");
const option2 = document.getElementById("option1");
const option3 = document.getElementById("option2");
const option4 = document.getElementById("option3");

//En este array se guardan las opciones para poder mezclarlas
const optionsArray = [option1, option2, option3, option4];

//Texto Pokemon: 
const title_poke = document.querySelector(".pokemon_text");

//Caja con el mensaje de cargando...
const loading = document.querySelector(".loader");

//Elemento de la imagen del pokemon
const img_pokemon = document.querySelector(".img_quiz");

//Elemento donde se ve el signo de interrogacion y luego se muestra si lo logró o no
const aviso = document.querySelector(".pokemon_text");

//Boton para reiniciar el quiz
const button_reinicio = document.querySelector("#button_again");

//Boton que es una flechita que nos permite ir a la siguiente pregunta
const boton_siguiente = document.querySelector(".icon_next");

//Boton de home
const home = document.querySelector("#icon_again");

//Elemento del puntaje
const elemento_puntaje = document.querySelector(".item_puntaje_num");
let puntaje = 0;

home.addEventListener('click', ()=>{
    window.location.reload();
});

const crearId = () => {
    return Math.floor(Math.random()*151)+1;//Numero Random
}

//Evento para ir al quiz (Sucede una vez)
boton_inicio.addEventListener('click', () => {
    
    contenedor_inicio.classList.add("desaparece");
    loading.classList.remove("desaparece");
    cargarQuiz();

    setTimeout(() => {
        loading.classList.add("desaparece");
        quiz.classList.remove("desaparece");
    }, 2000);

});

const cargarQuiz = async () => {

    const numeroRandom = crearId();//Numero random
    const URL = `https://pokeapi.co/api/v2/pokemon/${numeroRandom}`;//API con el numero random

    await fetch(URL).then((response) => response.json()).then((data) => {
        nombrePokemonCorrecto = data.name;//Se guarda en una variable el primer pokemon que seria el correcto

        quiz.classList.add("desaparece");
        loading.classList.remove("desaparece");

        setTimeout(()=>{
            loading.classList.add("desaparece");
            quiz.classList.remove("desaparece");
            cargarPreguntas(data);
        },2000);
        
    }).catch((error) => {
        console.error("Error al cargar esta monda: ", error);
    })

}

const cargarPreguntas = async (infoPoke) => {
    //Todo lo relacionado con el cargue de las preguntas
    boton_siguiente.style.display = "none";//Ocultar la flechita que nos permite ir a la siguiente pregunta

    //Volver a poner el filtro en la imagen
    img_pokemon.style.filter = "drop-shadow(0px 0px 15px var(--azulNeon)) contrast(0%)";

    //Acomodar el texto "?"
    if(screen.width < 550){
        aviso.style.fontSize = "5em";
        aviso.textContent = "?"
    }else{
        aviso.style.fontSize = "10em";
        aviso.textContent = "?";  
    }
    

    //Nombre del pokemon de la imagen
    let nombrePokemonCorrrecto = infoPoke.name 
    //Cambiamos la imagen del pokemon
    img_pokemon.setAttribute('src', infoPoke.sprites.other["official-artwork"].front_default); 

    //Array vacio donde se guardaran los nombres
    const nombresPokemonIncorrecto = new Array();

    //Desordenando los botones
    optionsArray.sort(() => Math.random() - 0.5);
    
    for (let i = 1; i < 4; i++) {
        //Llamamos de nuevo a la API para obtener otros 3 nombres de pokemones, nombres aleatorios
        const otherId = crearId();
        
        await fetch(URL2 + otherId).then((response) => response.json()).then((data) => {
            //Condicional para no repetir el pokemon correcto
            if(data.name != nombrePokemonCorrrecto){
                //console.log(data);
                nombresPokemonIncorrecto.push(data?.name);//Agregar los nombres incorrectos en un array
            }
            else{
                i--;
            }
        })

    };

    nombresPokemonIncorrecto.push(nombrePokemonCorrrecto);//agregamos a la ultima posicion el nombre correcto

    for(let i = 0; i < nombresPokemonIncorrecto.length; i++){
        //Agregamos los nombres de los pokemons al array que contiene los botones
        //console.log(i);
        optionsArray[i].textContent = nombresPokemonIncorrecto[i]; 
    }
    console.log(nombresPokemonIncorrecto);

    respuesta = nombrePokemonCorrrecto;
    
    //verificarRespuesta(nombrePokemonCorrrecto);
};

const verificarRespuesta = (respuesta) =>{
    //Caja con todos los botones (menos el de reinicio)
    let opciones_boton = document.querySelectorAll(".opciones_boton");

    console.log(opciones_boton);
    let contenidoBoton = respuesta.textContent;

    console.log(contenidoBoton);

    respuesta = nombrePokemonCorrecto;
    console.log(respuesta);

    if(respuesta === contenidoBoton){
        //El usuario acertó su respuesta
        console.log("Ese SI es el pokemon" + contenidoBoton);
        puntaje++//Aumentamos el puntaje si acertó

        //Agregamos el puntaje al elemento
        elemento_puntaje.textContent = puntaje;

        //Mostramos el mensaje de que el usuario acertó
        if(screen.width < 550){
            aviso.style.fontSize = "4.2em";
            aviso.textContent = "Acertaste";
        }else{
            aviso.style.fontSize = "5em";
            aviso.textContent = "Acertaste"; 
        }
        
        //Mostramos el boton para ir a la siguiente pregunta
        boton_siguiente.style.display = "block";

        //Quitamos el filtro al pokemon para que se pueda ver
        img_pokemon.style.filter = "drop-shadow(0px 0px 15px var(--azulNeon)) contrast(100%)";
    }
    else{

        opciones_boton.forEach(element =>{
            element.classList.add("desaparece");
        })

        console.log("Ese NO es el pokemon" + contenidoBoton);

        button_reinicio.classList.remove("desaparece");

        button_reinicio.addEventListener('click' , ()=>{
            window.location.reload();
        });


        if(screen.width < 550){
            aviso.style.fontSize = "4.2em";
            aviso.textContent = "Fallaste";
        }else{
            aviso.style.fontSize = "5em";
            aviso.textContent = "Fallaste"; 
        }
        
        
    }
}