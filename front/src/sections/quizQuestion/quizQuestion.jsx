import React, { useEffect, useState } from "react";
import ButtonQuiz from "../../components/buttonCustom/buttonQuiz";
import "./quizQuestion.css";
import { cargarPokemones } from "../../hooks/useQuiz";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";
import { msgQuiz } from "../../helpers/msgQuiz";

/*
0 => INCORRECTO
1 => CORRECTO
2 => PREGUNTA
*/

const QuizQuestion = () => {
  document.title = "Quiz Pokemon"; //Cambiar el title de la pagina

  const [pokeTrue, setPokeTrue] = useState(undefined);
  const [idOptions, setIdOptions] = useState([]);
  const [estadoQuiz, setEstadoQuiz] = useState(2);

  useEffect(() => {
    cargar();
  }, []);

  //FUNCION PARA CARGAR LOS POKEMONES, SE DEJA POR FUERA REUTILIZARLO EN EL BOTON
  const cargar = async () => {
    setEstadoQuiz(2); //Siempre definir el estado como 2 en estado pregunta
    const { pokemonTrue, arrayId } = await cargarPokemones();

    setPokeTrue(pokemonTrue);
    setIdOptions(arrayId);
  };

  const clickButton = (e) => {
    console.log(e.target.id);
    if (e.target.id == pokeTrue.id) {
      setEstadoQuiz(1);
    } else {
      setEstadoQuiz(0);
    }
  };

  return (
    <div className="all_container_quiz">
      <div className="container_quiz">
        <div className="quiz_pokemon">
          <img
            src={pokeTrue ? pokeTrue.img : ""}
            alt="pokemon_quiz"
            className={`img_quiz ${estadoQuiz == 1 && "revelar"}`}
          />
          <div className="container_aviso">
            <p className={`pokemon_text ${estadoQuiz != 2 && "respuesta"}`}>{msgQuiz(estadoQuiz)}</p>
            <i
              className={`fa-solid fa-arrow-right icon_next ${
                estadoQuiz != 1 ? "ocultar" : ""
              }`}
            ></i>
          </div>
        </div>

        {/*<!--Opciones del quiz-->*/}
        <div className="quiz_options">
          {estadoQuiz === 0 && (
            <ButtonCustom texto={"Intenta de nuevo"} ruta={-1} />
          )}
          {idOptions &&
            estadoQuiz === 2 &&
            idOptions.map((value, index) => (
              <ButtonQuiz
                key={index}
                texto={value.name}
                id={value.id}
                clickButton={clickButton}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
