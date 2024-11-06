import React from "react";
import "./home.css";
import TitleHome from "../../sections/titleHome/titleHome";
import NavbarCustom from "../../components/navbar/navbarCustom";
import ListCustom from "../../sections/list/listCustom";

const Home = () => {
  return (
    <>
      <TitleHome />
      <main className="main">
        <NavbarCustom />
        <ListCustom />
      </main>
    </>
  );
};

export default Home;
