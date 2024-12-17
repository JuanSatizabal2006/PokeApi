import React from "react";
import { formatId } from "../../../helpers/formatId";
import "./boxName.css";

const BoxName = ({ id, name, type }) => {
  return (
    <div className={`box_big_pokemon_title before_${type}`}>
      <h3 className="big_pokemon_title">{name}</h3>
      <p>#{formatId(id)}</p>
    </div>
  );
};

export default BoxName;
