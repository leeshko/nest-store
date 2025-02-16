import { Module } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FlowersModule,
    MicroserviceModule,
  ],
})
export class AppModule {}
