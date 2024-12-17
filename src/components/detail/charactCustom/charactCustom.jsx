import React from "react";
import "./charactCustom.css";
const CharactCustom = ({ info, type }) => {
  const statsInfo = ["GENERACIÓN", "PESO", "ALTURA", "CATEGORIA"];

  return (
    <div className="box_big_pokemon_info">
      <div className="big_pokemon_info">
        {statsInfo.map((value, index) => (
          <p className="big_pokemon_info-items" key={index}>
            {value}:
          </p>
        ))}
      </div>

      <div className="big_pokemon_info-data">
        <p className="big_pokemon_info_items-data span_arreglo">
          {info.game_indices && info.game_indices[0].version.name}
        </p>
        <p className="big_pokemon_info_items-data">{info.weight} LB</p>
        <p className="big_pokemon_info_items-data">{info.height} M</p>
        <button className={`big_pokemon_button type_${type}`}>{type}</button>
      </div>
    </div>
  );
};

export default CharactCustom;
