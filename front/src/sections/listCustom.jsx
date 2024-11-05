import React, { useState } from "react";
import "../assets/css/home.css";
import CustomCard from "../components/customCard";
import { usePokemon } from "../hooks/usePokemon";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingCustom from "../components/loadingCustom";

const ListCustom = () => {
  const { morePokemons, pokemons, more } = usePokemon();

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={morePokemons}
      hasMore={more}
      loader={<LoadingCustom />}
      endMessage={<p>FIN</p>}
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
