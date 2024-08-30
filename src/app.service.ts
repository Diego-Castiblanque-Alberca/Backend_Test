import { Injectable } from '@nestjs/common';
import { Pokemon } from './DTOs/pokemonDTO';
import { responseFindPokemonDTO } from './DTOs/responseFindPokemonDTO';
import { ResponseFindPokemonColorDTO } from './DTOs/responseFindPokemonColorDTO';
import { AsyncParser } from '@json2csv/node';
import { string as stringFormatter } from '@json2csv/formatters';

@Injectable()
export class AppService {
  private readonly _URLBASE: string = 'https://pokeapi.co/api/v2/';

  /**
   * Fetches Pokémon data by name or ID.
   *
   * @param {string} pokemonName - The name of the Pokémon to fetch.
   * @param {number} pokemonId - The ID of the Pokémon to fetch.
   * @returns {Promise<Pokemon>} - A promise that resolves to the Pokémon data.
   * @throws Will log an error message if the fetch request fails.
   */
  async getPokemonByNameOrID(
    pokemonName: string,
    pokemonId: number,
  ): Promise<Pokemon> {
    // Determine the parameter to use in the URL (name or ID)
    const param = pokemonName ? pokemonName : pokemonId;
    const URL = `${this._URLBASE}pokemon/${param}`;
    try {
      // Fetch data from the constructed URL
      const response = await fetch(URL);
      if (!response.ok) {
        // Log an error if the response is not OK
        console.log(`Error: ${response.status} ${response.statusText}`);
        return;
      }
      // Parse the JSON response
      const pokemonJson: responseFindPokemonDTO = await response.json();
      // Map the JSON response to a Pokemon object
      const pokemonData: Pokemon = {
        id: pokemonJson.id,
        base_experience: pokemonJson.base_experience,
        name: pokemonJson.name,
        height: pokemonJson.height,
        weight: pokemonJson.weight,
      };
      return pokemonData;
    } catch (error) {
      // Log any errors that occur during the fetch
      console.log('Error when getting the Pokémon data');
      console.log(error);
    }
  }

  /**
   * Fetches a list of Pokémon by their color and returns the data in CSV format.
   *
   * @param {string} color - The color of the Pokémon to fetch.
   * @returns {Promise<string>} - A promise that resolves to a CSV string of Pokémon data.
   * @throws Will log an error message if the fetch request fails.
   */
  async getPokemonsByColor(color: string): Promise<string> {
    const URL = `${this._URLBASE}pokemon-color/${color}`;
    try {
      // Fetch data from the constructed URL
      const response = await fetch(URL);
      if (!response.ok) {
        // Log an error if the response is not OK
        console.log(`Error: ${response.status} ${response.statusText}`);
        return;
      }
      // Parse the JSON response
      const pokemonListJson: ResponseFindPokemonColorDTO = await response.json();

      // Extract Pokémon names from the response
      const pokemonListNames: string[] = [];
      pokemonListJson.pokemon_species.forEach((pokemon) => {
        pokemonListNames.push(pokemon.name);
      });

      // Fetch detailed data for each Pokémon
      const pokemonList: Pokemon[] = [];
      for (const pokemonName of pokemonListNames) {
        const pokemon = await this.getPokemonByNameOrID(pokemonName, null);
        if (pokemon) {
          pokemonList.push(pokemon);
        }
      }

      // Sort Pokémon by base experience
      pokemonList.sort((a, b) => a.base_experience - b.base_experience);

      // Define CSV options
      const opts = {
        fields: ['id', 'name', 'base_experience', 'height', 'weight'],
        delimiter: ';',
        formatters: { string: stringFormatter({ quote: '' }) },
      };
      const transformOpts = {};
      const asyncOpts = {};
      const parser = new AsyncParser(opts, asyncOpts, transformOpts);

      // Convert Pokémon list to CSV
      const csv = await parser.parse(pokemonList).promise();
      return csv;
    } catch (error) {
      // Log any errors that occur during the fetch
      console.log('Error when getting the Pokémon list');
      console.log(error);
    }
  }
}