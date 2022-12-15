import React from "react";
import "./Image.css";

export const Image = ({ currentEvolution, pictureUrls, pokemonNames }) => {
  return (
    <div className="pokemon-container">
      {pictureUrls.length > 0 ? (
        <>
          <div className="image-container">
            <img
              className="image"
              src={pictureUrls[currentEvolution]}
              alt="pokemon"
            />
          </div>

          <div className="name">{pokemonNames[currentEvolution]}</div>
        </>
      ) : (
        "Hola, me llamo Dex, preciona siguiente para ver pokemons"
      )}
    </div>
  );
};
