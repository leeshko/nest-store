import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('FlowersController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/flowers (GET)', () => {
    return request(app.getHttpServer())
      .get('/flowers')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'Rose',
          color: 'Red',
          price: 7,
        },
        {
          id: 2,
          name: 'Lily',
          color: 'White',
          price: 10,
        },
        {
          id: 3,
          name: 'Tulip',
          color: 'Yellow',
          price: 5,
        },
      ]);
  });

  it('/flowers (POST)', () => {
    return request(app.getHttpServer())
      .post('/flowers')
      .send({
        name: 'Sunflower2',
        color: 'Yellow',
        price: 8,
      })
      .expect((response) => {
        console.log('Status Code: ', response.statusCode);
      })
      .expect((response) => response.body.name === 'Sunflower');
  });

  afterAll(async () => {
    await app.close();
  });
});
