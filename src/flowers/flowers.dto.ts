import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateFlowerDto {
  @IsString({
    message: 'Your name is not a string!!! - custom',
  })
  @ApiProperty({
    example: 'Max',
    required: true,
  })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'Red',
    required: true,
  })
  color: string;

  @IsNumber()
  @ApiProperty({
    example: 5,
    required: true,
  })
  price: number;
}
