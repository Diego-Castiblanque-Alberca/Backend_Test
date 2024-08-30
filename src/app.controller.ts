import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JsonMessage } from './DTOs/jsonMessageDTO';
import { Pokemon } from './DTOs/pokemonDTO';

import { FindPokemonDto } from './DTOs/findPokemonDTO';

@Controller('pokemon')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('findByNameOrId')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getPokemonByNameOrId(
    @Body() findPokemonDto: FindPokemonDto,
  ): Promise<JsonMessage | Pokemon> {
    const { name, id } = findPokemonDto;
    if (name || id) {
      return this.appService.getPokemonByNameOrID(name, id);
    } else {
      return {
        message: 'Error: You must provide either a name or an ID',
      };
    }
  }

  @Get('csv/:color')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getPokemonByColor(
    @Param('color') color: FindPokemonDto['color'],
  ): Promise<string> {
    return this.appService.getPokemonsByColor(color);
  }
}
