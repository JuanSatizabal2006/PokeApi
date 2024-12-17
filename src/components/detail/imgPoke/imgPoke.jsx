import React, { useEffect, useState } from "react";
import "./imgPoke.css";

const ImgPoke = ({ img, type }) => {  
  const [imagePoke, setImagePoke] = useState(undefined);
  const [arrayImages, setArrayImages] = useState([]);
  let i = 0;
  
  useEffect(()=>{
      const arrayVacio = []; //Guardado de imagenes
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

      setArrayImages(arrayVacio)     
      setImagePoke(arrayImages[0])
  },[])

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const interval = setInterval(() => {
      setImagePoke((prevImage) => {
        // Obtener el índice actual de la imagen mostrada
        const currentIndex = arrayImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % arrayImages.length;
        return arrayImages[nextIndex];
      });
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [arrayImages]);

  return (
    <div className="box_big_pokemon_img">
      <div className={`big_pokemon_degradado degradado_${type}`}></div>

      <img
        className="big_pokemon_imagen"
        src={imagePoke ? imagePoke : img.sprites.other["official-artwork"].front_default}
      />

      <div className={`box_big_pokemon_imagen-circulo imgFondo_${type}`}></div>
    </div>
  );
};

export default ImgPoke;
