import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/pokemon/findByNameOrId (POST) - Find by name', () => {
    return request(app.getHttpServer())
      .post('/pokemon/findByNameOrId')
      .send({ name: 'pikachu' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('name', 'pikachu');
      });
  });

  it('/pokemon/findByNameOrId (POST) - Find by ID', () => {
    return request(app.getHttpServer())
      .post('/pokemon/findByNameOrId')
      .send({ id: 25 })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('id', 25);
        expect(res.body).toHaveProperty('name', 'pikachu');
      });
  });

  it('/pokemon/findByNameOrId (POST) - Error when no name or ID provided', () => {
    return request(app.getHttpServer())
      .post('/pokemon/findByNameOrId')
      .send({})
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty(
          'message',
          'Error: You must provide either a name or an ID',
        );
      });
  });

  it('/pokemon/csv/:color (GET) - Get Pokémon by color', () => {
    return request(app.getHttpServer())
      .get('/pokemon/csv/yellow')
      .expect(200)
      .expect('Content-Type', /text\/csv/)
      .expect((res) => {
        expect(res.text).toContain('25;pikachu;112;4;60');
      });
  });
});