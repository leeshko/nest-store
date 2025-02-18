import {
  Body,
  Controller,
  Get,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { AuthGuard } from '../concepts/custom.guard';
import { LoggingInterceptor } from '../concepts/logging.interceptor';
import { CreateFlowerDto } from './flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('flowers')
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
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    type: CreateFlowerDto,
    description: 'JSON structure for flower object',
  })
  create(@Body() dto: CreateFlowerDto) {
    return this.flowersService.create(dto);
  }

  @Get('new-order')
  newOrder() {
    return [];
  }
}
