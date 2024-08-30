import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JsonMessage } from './DTOs/jsonMessageDTO';
import { Pokemon } from './DTOs/pokemonDTO';
import { FindPokemonDto } from './DTOs/findPokemonDTO';

/**
 * Controller for handling Pokémon-related requests.
 */
@Controller('pokemon')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Endpoint to find a Pokémon by name or ID.
   *
   * @param {FindPokemonDto} findPokemonDto - The DTO containing the name or ID of the Pokémon.
   * @returns {Promise<JsonMessage | Pokemon>} - A promise that resolves to a Pokémon object or an error message.
   */
  @Post('findByNameOrId')
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(200)
  async getPokemonByNameOrId(
    @Body() findPokemonDto: FindPokemonDto,
  ): Promise<JsonMessage | Pokemon> {
    const { name, id } = findPokemonDto;
    if (name || id) {
      // Call the service method to get Pokémon by name or ID and return the result
      return this.appService.getPokemonByNameOrID(name, id);
    } else {
      // Return an error message if neither name nor ID is provided
      return {
        message: 'Error: You must provide either a name or an ID',
      };
    }
  }

  /**
   * Endpoint to get a CSV of Pokémon by color.
   *
   * @param {string} color - The color of the Pokémon to fetch.
   * @returns {Promise<string>} - A promise that resolves to a CSV string of Pokémon data.
   */
  @Get('csv/:color')
  @UsePipes(new ValidationPipe({ transform: true }))
  @Header('Content-Type', 'text/csv')
  async getPokemonByColor(
    @Param('color') color: FindPokemonDto['color'],
  ): Promise<string> {
    // Call the service method to get Pokémon by color and return the result
    return this.appService.getPokemonsByColor(color);
  }
}