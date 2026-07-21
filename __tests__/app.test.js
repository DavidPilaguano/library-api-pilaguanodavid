const request = require('supertest');
const app = require('../app');

describe('Library API', () => {
  test('GET / responde con los datos del estudiante', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      mensaje: 'Biblioteca Digital ESPE',
      estudiante: 'DavidAlexanderPilaguanoChisaguano',
      nrc: '30730',
      correo: 'dapilaguano@espe.edu.ec'
    });
  });

  test('GET /book/:code responde con informacion del libro', async () => {
    const response = await request(app).get('/book/PIL101');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      code: 'PIL101',
      title: 'Libro PIL101',
      available: true
    });
  });

  test('GET /book/:code rechaza codigos invalidos', async () => {
    const response = await request(app).get('/book/INVALIDO');

    expect(response.status).toBe(400);
  });

  test('GET /fine calcula la multa', async () => {
    const response = await request(app).get('/fine?daysLate=5');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      daysLate: 5,
      fine: 2.5
    });
  });

  test('GET /fine rechaza dias negativos', async () => {
    const response = await request(app).get('/fine?daysLate=-1');

    expect(response.status).toBe(400);
  });
});
