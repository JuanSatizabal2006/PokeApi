import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

import StatsCustom from "../../components/detail/statsCustom/statsCustom";
import CharactCustom from "../../components/detail/charactCustom/charactCustom";
import BoxName from "../../components/detail/boxName/boxName";
import BoxHabilid from "../../components/detail/boxHabilid/boxHabilid";
import ImgPoke from "../../components/detail/imgPoke/imgPoke";
import ButtonBack from "../../components/buttonBack/buttonBack";

const Detail = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const [dataApi, setDataApi] = useState({});
  const [type, setType] = useState();
  const [load, setLoad] = useState(false);
  const idPokemon = useParams("id");

  useEffect(() => {
    const getPokemonOne = async () => {
      const response = await fetch(`${URL}${idPokemon.id}`);
      const data = await response.json();

      //OBTENER EL TIPO
      setType(data.types[0].type.name);
      setDataApi(data);
      setLoad(true);
    };
    getPokemonOne();
  }, []);

  return (
    load && (
      <>
        <ButtonBack />
        <main className="container_big_pokemon">
          <div className="container_big_pokemon_title-stats">
            <BoxName id={dataApi.id} name={dataApi.name} type={type} />
            <div className="responsiveTablet">
              <StatsCustom stats={dataApi.stats} type={type} />
              <CharactCustom info={dataApi} type={type} />
            </div>
          </div>
          <div className="container_big_pokemon_img">
            <ImgPoke img={dataApi} type={type} />
          </div>
          <div className="container_big_pokemon_info">
            <CharactCustom info={dataApi} type={type} />
            <BoxHabilid habilidades={dataApi.abilities} type={type} />
          </div>
        </main>
      </>
    )
  );
};

export default Detail;
