import React from "react";
import "./boxHabilid.css";

const BoxHabilid = ({ habilidades, type }) => {
  return (
    <div className={`big_pokemon_habilidades before_${type}`}>
      <h3 className="big_pokemon_habilidades_title">HABILIDADES</h3>
      <p className="big_pokemon_habilidades_items-data">
        Ataque rapidos:
        <span className="span_arreglo">
          {habilidades && habilidades[0].ability.name}
        </span>
      </p>
      <p className="big_pokemon_habilidades_items-data">
        Ataque cargados:
        <span className="span_arreglo">
          {habilidades && habilidades[1].ability.name}
        </span>
      </p>
    </div>
  );
};

export default BoxHabilid;
