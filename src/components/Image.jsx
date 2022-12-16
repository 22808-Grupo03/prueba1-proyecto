import React from "react";
import "./Image.css";

export const Image = ({ currentEvolution, pictureUrls }) => {
  return (
    <div className="bg-primary border border-black border-2 p-2 m-2 rounded d-flex justify-content-center img">
      {pictureUrls.length > 0 ? (
        <img
          className=""
          src={pictureUrls[currentEvolution]}
          alt="pokemon"
        />
      ) : (
        "Hola, me llamo Dex, preciona siguiente para ver pokemons"
      )}
    </div>
  );
};
