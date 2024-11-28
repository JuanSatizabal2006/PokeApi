import React from "react";
import ButtonQuiz from "../../components/buttonCustom/buttonQuiz";
import "./quizQuestion.css";

const QuizQuestion = () => {
  const clickButton = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="all_container_quiz">
      <div className="container_quiz">
        <div className="quiz_pokemon">
          <img src="" alt="pokemon_quiz" className="img_quiz" />
          <div className="container_aviso">
            <p className="pokemon_text"></p>
            <a>
              <i className="fa-solid fa-arrow-right icon_next"></i>
            </a>
          </div>
        </div>

        {/*<!--Opciones del quiz-->*/}
        <div className="quiz_options">
          <ButtonQuiz texto={"Pikachu"} id={1} clickButton={clickButton} />
          <ButtonQuiz texto={"Charizard"} id={2} clickButton={clickButton} />
          <ButtonQuiz texto={"Mewto"} id={3} clickButton={clickButton} />
          <ButtonQuiz texto={"Vaporeon"} id={4} clickButton={clickButton} />
        </div>
      </div>

      {/*
      <div className="cajaPadre">
        <div className="cajaBackground"></div>
        <div className="cajaHijo">
          <p>Texto de ejemplo</p>
        </div>
      </div>
    */}
    </div>
  );
};

export default QuizQuestion;
