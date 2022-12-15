import React from "react";
import "./Image.css";

export const Image = ({ currentEvolution, pictureUrls }) => {
  return (
    <div className="image-container">
      {pictureUrls.length > 0 ? (
        <img
          className="image"
          src={pictureUrls[currentEvolution]}
          alt="pokemon"
        />
      ) : (
        "Hola, me llamo Dex, preciona siguiente para ver pokemons"
      )}
    </div>
  );
};
