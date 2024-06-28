const Utils = {
  calculateNumber: function(type, a, b) {
    const x = Math.round(a);
    const y = Math.round(b);

    if (type === 'SUM') {
        return x + y;
    }
    if (type === 'SUBTRACT') {
        return x - y;
    }
    if (type === 'DIVIDE') {
        if (y === 0) {
            return 'Error';
        }
        return x / y;
    }
  }
};

module.exports = Utils;