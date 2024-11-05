import React from "react";
import ListCustom from "../sections/listCustom";
import "../assets/css/home.css";
import TitleHome from "../components/titleHome";
import NavbarCustom from "../components/navbarCustom";

const Home = () => {
  return (
    <>
      <TitleHome />
      <main>
        <NavbarCustom />
        <ListCustom />
      </main>
    </>
  );
};

export default Home;
