import React from "react";

const InputSearch = () => {
  return (
    <div className="item_search-input">
      <input
        type="search"
        name="busquedacodigo"
        size="20"
        placeholder="Buscador"
        className="search_input"
        id="search_input"
      />
      <i className="fa-solid fa-magnifying-glass" id="button_search"></i>
    </div>
  );
};

export default InputSearch;
