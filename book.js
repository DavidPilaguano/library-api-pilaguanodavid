function calculateFine(daysLate) {
  if (!Number.isFinite(daysLate)) {
    throw new TypeError('daysLate must be a valid number');
  }

  if (daysLate < 0) {
    throw new RangeError('daysLate cant be negative');
  }

  return Number((daysLate * 0.5).toFixed(2));
}

function isValidBookCode(code) {
  return typeof code === 'string' && /^[A-Z]{3}\d{3}$/.test(code);
}

module.exports = {
  calculateFine,
  isValidBookCode
};
//PilaguanoDavid