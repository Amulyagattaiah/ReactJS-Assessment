// src/store/pokemonSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
}

interface PokemonState {
  list: Pokemon[];
}

const initialState: PokemonState = {
  list: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.list = action.payload;
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
  },
});

export const { setPokemons, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
