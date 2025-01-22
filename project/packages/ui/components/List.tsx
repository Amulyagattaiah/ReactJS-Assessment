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
    <ul>
      {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default List;
