import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-75">
      <h1 className="font-monospace fs-1 text-white">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
