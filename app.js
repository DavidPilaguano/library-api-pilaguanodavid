const express = require('express');
const { calculateFine, isValidBookCode } = require('./book');

const app = express();

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Biblioteca Digital ESPE',
    estudiante: 'DavidAlexanderPilaguanoChisaguano',
    nrc: '30730',
    correo: 'dapilaguano@espe.edu.ec'
  });
});

app.get('/book/:code', (req, res) => {
  const { code } = req.params;

  if (!isValidBookCode(code)) {
    return res.status(400).json({
      error: 'El codigo del libro debe cumplir el formato AAA999'
    });
  }

  return res.json({
    code,
    title: `Libro ${code}`,
    available: true
  });
});

app.get('/fine', (req, res) => {
  const daysLate = Number(req.query.daysLate);

  if (!Number.isFinite(daysLate) || daysLate < 0) {
    return res.status(400).json({
      error: 'daysLate debe ser un numero mayor o igual a cero'
    });
  }

  return res.json({
    daysLate,
    fine: calculateFine(daysLate)
  });
});

module.exports = app;
//PilaguanoDavid