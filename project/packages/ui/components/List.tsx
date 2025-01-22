import { useDispatch } from "react-redux";
import { removePokemon } from "../../../apps/app/src/redux/pokemonSlice";

export interface Pokemon {
  name: string;
  url: string;
}

interface ListProps {
  pokemonList: Pokemon[];
}

export const List: React.FC<ListProps> = ({ pokemonList }) => {
  const dispatch = useDispatch();

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} className="pokemon-card">
          <div className="pokemon-name">{pokemon.name}</div>
          <button
            className="remove-btn"
            onClick={() => handleRemove(pokemon.name)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
