function calculateNumber(type, a, b) {
  const x = Math.round(a);
  const y = Math.round(b);
  let result = 0;
  if (type === 'SUM') {
    result = x + y;
  }
  if (type === 'SUBTRACT') {
    result = x - y;
  }
  if (type === 'DIVIDE') {
    if (y === 0) {
      result = 'Error';
    } else {
      result = x / y;
    }
  }
  return result;
}

module.exports = calculateNumber;
