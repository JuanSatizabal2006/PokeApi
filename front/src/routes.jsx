import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import QuizHome from "./views/quizHome/quizHome";
import QuizJuego from "./views/quizJuego/quizJuego";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Detail />} />
      <Route path="/quiz" element={<QuizHome />} />
      <Route path="/quiz/juego" element={<QuizJuego />} />
    </Routes>
  );
};

export default RoutesCustom;