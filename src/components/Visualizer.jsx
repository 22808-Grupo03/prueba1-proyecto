import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { Controls } from "./Controls";
import { Image } from "./Image";
import "./Visualizer.css";

export const Visualizer = () => {
  const [currentEvolution, setCurrentEvolution] = useState([]);
  const [evolutionChainId, setEvolutionChainId] = useState(0);
  const [pictureUrls, setPictureUrls] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  const getEvolutionChain = useCallback((id) => {
    axios
      .get("https://pokeapi.co/api/v2/evolution-chain/" + id + "/")
      .then((response) => {
        let evoluciones = response.data.chain.evolves_to;
        let tieneEvolucion = true;
        let urls = [];
        let names = [];
        names.push(response.data.chain.species.name);

        // get basic pokemon picture

        axios.get(response.data.chain.species.url).then((response) => {
          axios.get(response.data.varieties[0].pokemon.url).then((response) => {
            urls.push(response.data.sprites.front_default);
            setPictureUrls(urls);

            // console.log(pictureUrls);
          });
        });

        // get evolutions pictures

        while (tieneEvolucion) {
          if (evoluciones.length > 0) {
            names.push(evoluciones[0].species.name);
            axios.get(evoluciones[0].species.url).then((response) => {
              axios
                .get(response.data.varieties[0].pokemon.url)
                .then((response) => {
                  urls.push(response.data.sprites.front_default);
                  setPictureUrls(urls);
                  setPokemonNames(names);
                });
            });
            evoluciones = evoluciones[0].evolves_to;
          } else {
            tieneEvolucion = false;
          }
        }
      });
  }, []);

  useEffect(() => {
    if (evolutionChainId > 0) {
      getEvolutionChain(evolutionChainId);
    }
  }, [evolutionChainId, getEvolutionChain]);

  const controlProps = {
    evolutionChainId,
    setEvolutionChainId,
    currentEvolution,
    setCurrentEvolution,
    pictureUrls,
  };
  const imageProps = {
    currentEvolution,
    pictureUrls,
    pokemonNames,
  };
  return (
    <div className="visualizer-container">
      <Image {...imageProps} />
      <Controls {...controlProps} />
    </div>
  );
};
