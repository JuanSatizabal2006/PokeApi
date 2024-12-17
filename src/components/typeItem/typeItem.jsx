import React from "react";
import "./typeItem.css";

const TypeItem = ({ type }) => {

  return (
    <div className="carta_info_categoria">
      {type.map((value, index) => (
        <p key={index} className={`carta_item-categoria type_${value.type.name}`}>{value.type.name}</p>
      ))}
    </div>
  );
};

export default TypeItem;
