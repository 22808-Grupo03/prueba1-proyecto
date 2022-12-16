import React from "react";
import "./Controls.css";

export const Controls = ({
  evolutionChainId,
  setEvolutionChainId,
  currentEvolution,
  setCurrentEvolution,
  pictureUrls,
}) => {
  const evolucionar = () => {
    if (currentEvolution < pictureUrls.length - 1) {
      setCurrentEvolution(currentEvolution + 1);
    }
  };
  const incremetarId = () => {
    if (evolutionChainId < 468) {
      setCurrentEvolution(0);
      setEvolutionChainId(evolutionChainId + 1);
    }
    console.log(pictureUrls);
  };
  const disminuirId = () => {
    if (evolutionChainId > 1) {
      setCurrentEvolution(0);
      setEvolutionChainId(evolutionChainId - 1);
    }
  };

  return (
    <div className="container">
      <div className="row gx-2">
        <button
          disabled={evolutionChainId < 2}
          onClick={() => disminuirId()}
          className="btn btn-light col"
        >
          Anterior
        </button>
        <button
          // disabled={currentEvolution >= pictureUrls.length - 1}
          onClick={evolucionar}
          className="btn btn-light col"
        >
          Evolucionar
        </button>
        <button
          disabled={evolutionChainId > 467}
          onClick={() => incremetarId()}
          className="btn btn-light col"
        >
          Siguiente
        </button>
      </div>
    </div>

  );
};
