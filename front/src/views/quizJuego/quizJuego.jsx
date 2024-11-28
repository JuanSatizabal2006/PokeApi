import React from "react";
import QuizQuestion from "../../sections/quizQuestion/quizQuestion";
import NavQuiz from "../../sections/navQuiz/navQuiz";
import TitleQuiz from "../../components/titleQuiz/titleQuiz";
import "./quizJuego.css";

const QuizJuego = () => {
  return (
    <>
      <TitleQuiz />
      <main className="all_container_options">
        <div className="container_options">
          <NavQuiz />
          <QuizQuestion />
        </div>
      </main>
    </>
  );
};

export default QuizJuego;
