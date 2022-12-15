import React from "react";
import "./Controls.css";

export const Controls = ({ evolutionChainId, setEvolutionChainId }) => {
  const incremetarId = () => {
    if (evolutionChainId < 468) setEvolutionChainId(evolutionChainId + 1);
  };
  const disminuirId = () => {
    if (evolutionChainId > 1) setEvolutionChainId(evolutionChainId - 1);
  };

  return (
    <div className="controls-container">
      <button disabled={evolutionChainId < 2} onClick={() => disminuirId()}>
        Anterior
      </button>
      <button>Evolucionar</button>
      <button disabled={evolutionChainId > 467} onClick={() => incremetarId()}>
        Siguiente
      </button>
    </div>
  );
};
