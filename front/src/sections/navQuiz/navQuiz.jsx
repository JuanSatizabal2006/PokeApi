import React from "react";
import "./navQuiz.css";

const NavQuiz = () => {
  return (
    <header className="container_header">
      {/*<!--Informacion superior con el puntaje y la opcion de regresar al inicio-->*/}
      <p className="item_puntaje">
        Puntaje: <span className="item_puntaje_num">0</span>
      </p>
      <i className="fa-solid fa-house item_puntaje" id="icon_again"></i>
    </header>
  );
};

export default NavQuiz;
