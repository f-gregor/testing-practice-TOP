const calculator = (() => {
    const add = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('inputs must be numbers');
        }
        return a + b;
    };

    const subtract = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('inputs must be numbers');
        }
        return a - b;
    };

    const multiply = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('inputs must be numbers');
        }
        return a * b;
    };

    const divide = (a, b) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('inputs must be numbers');
        }
        if (b === 0) {
            throw new Error('division by zero');
        }
        return a / b;
    };

    return {add, subtract, multiply, divide};
})();

module.exports = calculator;