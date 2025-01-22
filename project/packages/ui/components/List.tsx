export interface Pokemon {
  name: string;
  url: string;
}
[];

interface ListProps {
  pokemonList: Pokemon[];
}

const List: React.FC<ListProps> = ({ pokemonList }) => {
  return (
    <ul className="grid">
      {pokemonList.map((pokemon, index) => (
        <li key={index} className="item">
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
