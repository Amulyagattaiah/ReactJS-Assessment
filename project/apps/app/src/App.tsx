import { useEffect, useState } from 'react';
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const pokemonNames = data.results.map((pokemon: { name: string }) => pokemon.name);
        setPokemonList(pokemonNames);
      } catch (error) {
        console.error(error);//for error
      }
    };

    fetchPokemon();
  }, []);
  return (
  <>
    <h1>Pokemon list:</h1>
    <List />
  </>
  )
}

export default App
