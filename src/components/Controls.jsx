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
    <div className="controls-container">
      <button disabled={evolutionChainId < 2} onClick={() => disminuirId()}>
        Anterior
      </button>
      <button
        // disabled={currentEvolution >= pictureUrls.length - 1}
        onClick={evolucionar}
      >
        Evolucionar
      </button>
      <button disabled={evolutionChainId > 467} onClick={() => incremetarId()}>
        Siguiente
      </button>
    </div>
  );
};
