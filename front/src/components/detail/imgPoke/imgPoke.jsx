import React, { useEffect, useState } from "react";
import "./imgPoke.css";

const ImgPoke = ({ img, type }) => {
  const [imagePoke, setImagePoke] = useState("");
  const arrayVacio = []; //Guardado de imagenes
  let i = 0;
  const objVacio = {
    home: img.sprites.other.home,
    "official-artwork": img.sprites.other["official-artwork"],
  };

  Object.entries(objVacio).forEach(([key, value]) => {
    //ACCEDER AL OBJETO QUE CONTIENE LA URL
    Object.entries(value).forEach(([keyValue, item]) => {
      //ACCEDER A LOS LINKS
      item && arrayVacio.push(item);
    });
  });


  setInterval(() => {
    setImagePoke(arrayVacio[i])
    
    if(i > arrayVacio.length){
        i = 0
    }

    i++
  },10000);

  /*
  const a = () => {
    setTimeout(() => {
      console.log("SE REPITE");
      a();
    }, 5000);
  };

  a();
*/
  return (
    <div className="box_big_pokemon_img">
      <div className={`big_pokemon_degradado degradado_${type}`}></div>

      <img
        className="big_pokemon_imagen"
        src={imagePoke}
      />

      <div className={`box_big_pokemon_imagen-circulo imgFondo_${type}`}></div>
    </div>
  );
};

export default ImgPoke;
