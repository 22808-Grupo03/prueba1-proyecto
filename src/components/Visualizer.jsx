import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { Controls } from "./Controls";
import { Image } from "./Image";
import "./Visualizer.css";

export const Visualizer = () => {
  const [pokemonId, setPokemonId] = useState();
  const [evolutionChainId, setEvolutionChainId] = useState(0);
  const [pictureUrl, setPictureUrl] = useState("");

  const getEvolutionChain = useCallback((id) => {
    axios
      .get("https://pokeapi.co/api/v2/evolution-chain/" + id + "/")
      .then((response) => {
        // Establecer la Url de la imagen de pokemones base

        // Obtener Url de imegen de pokemones evolucionados
        let evoluciones = response.data.chain.evolves_to;
        let tieneEvolucion = true;
        let contadorEvoluciones = 0;

        while (tieneEvolucion) {
          // console.log(evoluciones.length);
          if (evoluciones.length > 0) {
            tieneEvolucion = true;
            evoluciones = evoluciones[0].evolves_to;
            contadorEvoluciones++;
          } else {
            tieneEvolucion = false;
          }
        }

        return axios.get(response.data.chain.species.url).then((response) => {
          axios.get(response.data.varieties[0].pokemon.url).then((response) => {
            setPictureUrl(response.data.sprites.front_default);
          });
        });
      });
  }, []);

  useEffect(() => {
    if (evolutionChainId > 0) {
      getEvolutionChain(evolutionChainId);
    }
  }, [evolutionChainId, getEvolutionChain]);

  const controlProps = { evolutionChainId, setEvolutionChainId };
  return (
    <div className="visualizer-container">
      <Image url={pictureUrl} />
      <Controls {...controlProps} />
    </div>
  );
};
