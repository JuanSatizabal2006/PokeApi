import React from "react";
import "./home.css";
import TitleHome from "../../sections/titleHome/titleHome";

import ListCustom from "../../sections/list/listCustom";

const Home = () => {
  return (
    <>
      <TitleHome />
      <main className="main">
        <ListCustom />
      </main>
    </>
  );
};

export default Home;
