import React from "react";
import { usePokemon } from "../../hooks/usePokemon";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingCustom from "../../components/loadingCustom/loadingCustom";
import CustomCard from "../../components/customCard/customCard";
import "./listCustom.css";

const ListCustom = () => {
  const { morePokemons, pokemons, more } = usePokemon();

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={morePokemons}
      hasMore={more}
      loader={<LoadingCustom text={"Cargando"} />}
      endMessage={
        <div className="boxFin">
          <p>¡Has llegado al final!</p>
        </div>
      }
      className="allContainer"
    >
      {pokemons.map((value, index) => (
        <CustomCard
          img={value.img}
          name={value.name}
          types={value.types}
          id={value.id}
          hp={value.hp}
          atk={value.atk}
          def={value.def}
          key={index}
        />
      ))}
    </InfiniteScroll>
  );
};

export default ListCustom;
