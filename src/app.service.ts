import { Injectable } from '@nestjs/common';
import { Pokemon } from './DTOs/pokemonDTO';
import { responseFindPokemonDTO } from './DTOs/responseFindPokemonDTO';
import { ResponseFindPokemonColorDTO } from './DTOs/responseFindPokemonColorDTO';

@Injectable()
export class AppService {
  private readonly _URLBASE: string = 'https://pokeapi.co/api/v2/';

  async getPokemonByNameOrID(
    pokemonName: string,
    pokemonId: number,
  ): Promise<Pokemon> {
    const param = pokemonName ? pokemonName : pokemonId;
    const URL = `${this._URLBASE}pokemon/${param}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        console.log(`Error: ${response.status} ${response.statusText}`);
        return;
      }
      const pokemonJson: responseFindPokemonDTO = await response.json();
      const pokemonData: Pokemon = {
        id: pokemonJson.id,
        base_experience: pokemonJson.base_experience,
        name: pokemonJson.name,
        height: pokemonJson.height,
        weight: pokemonJson.weight,
      };
      return pokemonData;
    } catch (error) {
      console.log('Error al obtener el Pokémon');
      console.log(error);
    }
  }

  async getPokemonsByColor(color: string): Promise<string> {
    const URL = `${this._URLBASE}pokemon-color/${color}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        console.log(`Error: ${response.status} ${response.statusText}`);
        return;
      }
      const pokemonListJson: ResponseFindPokemonColorDTO = await response.json();

      const pokemonListNames: string[] = [];
      pokemonListJson.pokemon_species.forEach((pokemon) => {
        pokemonListNames.push(pokemon.name);
      });

      const pokemonList: Pokemon[] = [];
      for (const pokemonName of pokemonListNames) {
        const pokemon = await this.getPokemonByNameOrID(pokemonName, null);
        pokemonList.push(pokemon);
      }
      pokemonList.sort((a, b) => a.base_experience - b.base_experience);

      return Promise.resolve('Pokemons list');
    } catch (error) {
      console.log('Error al obtener la lista de Pokémon');
      console.log(error);
    }

  }
}
