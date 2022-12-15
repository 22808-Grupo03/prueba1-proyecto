import React from "react";
import "./Image.css";

export const Image = ({ url }) => {
  return (
    <div className="image-container">
      {url ? (
        <img className="image" src={url} alt="pokemon" />
      ) : (
        "Hola, me llamo Dex"
      )}
    </div>
  );
};
