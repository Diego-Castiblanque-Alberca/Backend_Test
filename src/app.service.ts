import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly _URLBASE: string = 'https://pokeapi.co/api/v2/';

  getHello(): string {
    return 'Hello World!';
  }
}
