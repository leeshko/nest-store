import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/concepts/test.pipe';
import { AuthGuard } from 'src/concepts/custom.guard';
import { LoggingInterceptor } from 'src/concepts/logging.interceptor';
import { CreateFlowerDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(11111, pageNumber);
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowerDto) {
    return this.flowersService.create(dto);
  }

  @Get('new-order')
  newOrder() {
    console.log(333333);
    return [];
  }
}
