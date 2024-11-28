import React from "react";
import "./buttonCustom.css";

const ButtonQuiz = ({ id, texto, clickButton }) => {

  return (
    <button className="button_quiz" onClick={clickButton} id={id}>
      {texto}
    </button>
  );
};

export default ButtonQuiz;
