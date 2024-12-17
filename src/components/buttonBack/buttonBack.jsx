import React from "react";
import { Link } from "react-router-dom";
import './buttonBack.css'

const ButtonBack = () => {
  return (
    <div className="box_button_back">
      <Link to="/">
        <i className="fa-regular fa-circle-left button_back-icon"></i>
      </Link>
    </div>
  );
};

export default ButtonBack;
