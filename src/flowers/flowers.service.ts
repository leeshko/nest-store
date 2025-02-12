import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'red',
        price: 5,
      },
      {
        name: 'Tulip',
        color: 'blue',
        price: 7,
      },
      {
        name: 'Lily',
        color: 'black',
        price: 9,
      },
    ];
  }
}
