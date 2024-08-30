import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsInt } from 'class-validator';

export class FindPokemonDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim().toLowerCase().replace('.', '-'))
  name?: string;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  id?: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim().toLowerCase())
  color?: string;
}
