import React from "react";

const NavQuiz = () => {

  return (
    <header class="container_header">
      {/*<!--Informacion superior con el puntaje y la opcion de regresar al inicio-->*/}
      <p class="item_puntaje">
        Puntaje: <span class="item_puntaje_num">0</span>
      </p>
      <i class="fa-solid fa-house item_puntaje" id="icon_again"></i>
    </header>
  );
};

export default NavQuiz;
