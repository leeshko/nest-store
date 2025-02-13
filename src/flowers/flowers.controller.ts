import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/concepts/test.pipe';
import { AuthGuard } from 'src/concepts/custom.guard';
import { LoggingInterceptor } from 'src/concepts/logging.interceptor';

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
}
