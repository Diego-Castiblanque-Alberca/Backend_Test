import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  _URLBASE: string = 
  getHello(): string {
    return 'Hello World!';
  }
}
