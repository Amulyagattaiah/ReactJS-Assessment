import { useEffect, useState } from "react";
import { List } from "ui";
import { Pokemon } from "ui/components/List";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        console.log("data", data);
        const pokemonNames = data.results;
        setPokemonList(pokemonNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, []);
  return (
    <>
      <h1>Pokemon list:</h1>
      <List pokemonList={pokemonList} />
    </>
  );
};

export default App;
