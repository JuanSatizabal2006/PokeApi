import React from "react";
import './loadingCustom.css'

const LoadingCustom = ({text}) => {
  return (
    <div className="loader">
      <div data-glitch="Loading..." className="glitch">
        {text}...
      </div>
    </div>
  );
};

export default LoadingCustom;
