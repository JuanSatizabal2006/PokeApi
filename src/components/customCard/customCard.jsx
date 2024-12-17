import React from "react";
import "./customCard.css";
import { Link } from 'react-router-dom'
import { formatId } from '../../helpers/formatId'
import TypeItem from "../typeItem/typeItem";


const CustomCard = ({ name, id, types, hp, atk, def, img }) => {
  //Categoria inicial del pokemon
  const type = types[0].type.name;

  return (
    <div className={`categoriaCarta_${type} containerCard`}>
      <h2 className="cardName" id="cardName">
        {name}
      </h2>
      <div className="containerPokeImg">
        <Link className="pokeImgLink" to={`pokemon/${id}`}>
          <img className="imagen enlace_big" id={id} src={img} alt="imgPoke" />
        </Link>
        <img className={`pokeImgFondo imgFondo_${type}`} />
      </div>
      <div className="carta_info" id="carta_info">
        <div className="carta_info_numero">
          <p>#{formatId(id)}</p>
        </div>
        <TypeItem type={types} />
      </div>
      <div className={`carta_estadisticas estadistica_borde_${type}`}>
        <p className="hp">HP:{hp}</p>
        <p className="att">ATK:{atk}</p>
        <p className="def">DEF:{def}</p>
      </div>
    </div>
  );
};

export default CustomCard;
