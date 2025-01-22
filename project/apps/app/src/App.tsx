import { useEffect, useState } from "react";
import { List } from "ui";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "ui/components/List";
import { setPokemons } from "./redux/pokemonSlice";
const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: any) => state.pokemon.list);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        console.log("data", data);
        const pokemonNames = data.results;
        dispatch(setPokemons(pokemonNames));
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, []);
  return (
    <>
      <h1>Pokemon list:</h1>
      <List pokemonList={pokemons} />
    </>
  );
};

export default App;
