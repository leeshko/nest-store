import { IsNumber, IsString } from 'class-validator';

export class CreateFlowerDto {
  @IsString({
    message: 'Your name is not a string!!! - custom',
  })
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;
}
