import React from "react";
import "./title.css";
import ScrollAnimation from "../../components/scrollAnimation/scrollAnimation";

const TitleHome = () => {
  return (
    <section className="containerTitulo">
      <div className="containerLetras">
        <p className="letrasTitulo">P</p>
        <p className="letrasTitulo">O</p>
        <p className="letrasTitulo">K</p>
        <p className="letrasTitulo">E</p>
        <p className="letrasTitulo">M</p>
        <p className="letrasTitulo">O</p>
        <p className="letrasTitulo">N</p>
        <p className="letrasTituloResponsive">POKE</p>
        <p className="letrasTituloResponsive">MON</p>
      </div>
      <ScrollAnimation />
    </section>
  );
};

export default TitleHome;
