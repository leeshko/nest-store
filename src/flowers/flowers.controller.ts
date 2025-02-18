import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { AuthGuard } from '../concepts/custom.guard';
import { LoggingInterceptor } from '../concepts/logging.interceptor';
import { CreateFlowerDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  // @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  // @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowerDto) {
    return this.flowersService.create(dto);
  }

  @Get('new-order')
  newOrder() {
    console.log(333333);
    return [];
  }
}
