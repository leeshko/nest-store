import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class FlowerModule {
  static forRoot(options: Record<string, any>): DynamicModule {
    return {
      module: FlowerModule,
      providers: [{ provide: 'OPTIONS', useValue: options }],
      exports: [],
    };
  }
}
