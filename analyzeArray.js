function analyzeArray(array) {
    if (!Array.isArray(array)) throw new TypeError('argument must be an array');
    let min = max = undefined;
    let sum = 0;
    let length = 0;

    for(let i = 0; i < array.length; i++) {
        let current = array[i];
        if (typeof current === 'number') {
            if (!max || current > max) max = current;
            if (!min || current < min) min = current;
            sum += current;
            length++;
        }
    }

    return {min: min,
            max: max,
            average: ((length) ? sum / length : undefined),
            length: length};
};

module.exports = analyzeArray;