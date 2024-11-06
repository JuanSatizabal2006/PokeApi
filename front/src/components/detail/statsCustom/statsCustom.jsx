import React from "react";
import './statsCustom.css'

const StatsCustom = ({ stats, type }) => {

  const statsPoke = [
    "PS",
    "ATAQUE",
    "DEFENSA",
    "VELOCIDAD",
    "DEFENSA ESPECIAL",
    "ATAQUE ESPECIAL",
  ];

  return (
    <div className="box_big_pokemon_stats">
      <div className="big_pokemon_stats">
        {statsPoke.map((element, index) => (
          <p className="big_pokemon_stats-items" key={index}>
            {element}:
          </p>
        ))}
      </div>
      <div className="big_pokemon_stats-data">
        {stats &&
          stats.map((value, index) => (
            <p className="big_pokemon_stats_items-data" key={index}>
              {value.base_stat}
            </p>
          ))}
      </div>
      <div className="big_pokemon_stats-progress">
        {stats &&
          stats.map((value, index) => (
            <progress
              style={{width: `${value.base_stat / 2}px`, accentColor: `var(--${type})`}}
              max={value.base_stat}
              value={value.base_stat}
              className="stats_items-progress"
              key={index}
            ></progress>
          ))}
      </div>
    </div>
  );
};

export default StatsCustom;
