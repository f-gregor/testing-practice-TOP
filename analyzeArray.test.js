const analyzeArray = require("./analyzeArray.js");

const testCases = [
    {
        label: 'Works with an empty array',
        input: [],
        expected: {
            min: undefined,
            max: undefined,
            average: undefined,
            length: 0
        }
    },
    {
        label: 'Works with integers',
        input: [1, 2, 3, 4, 5],
        expected: {
            min: 1,
            max: 5,
            average: 3,
            length: 5
        }
    },
    {
        label: 'Works with floats',
        input: [1.5, 2.5, 3.5],
        expected: {
            min: 1.5,
            max: 3.5,
            average: 2.5,
            length: 3
        }
    },
    {
        label: 'Works with negative numbers',
        input: [-1.5, -7, 2, 3.5, 15, -23],
        expected: {
            min: -23,
            max: 15,
            average: -11/6,
            length: 6
        }
    },
    {
        label: 'Skips non numeric arguments',
        input: ["hello", "world", "no numeric arguments", "in this array"],
        expected: {
            min: undefined,
            max: undefined,
            average: undefined,
            length: 0
        }
    },
    {
        label: 'Skips non numeric arguments with numbers',
        input: [1, 2, "hello", 3, "world"],
        expected: {
            min: 1,
            max: 3,
            average: 2,
            length: 3
        }
    },
    {
        label: 'Works with zeros',
        input: ["this", 0, "contains", "only", 0, "zeros", 0, "and", "strings"],
        expected: {
            min: 0,
            max: 0,
            average: 0,
            length: 3
        }
    }
]

testCases.forEach((obj) => {
    test(obj.label, () => {
        expect(analyzeArray(obj.input)).toEqual(obj.expected)
})});

test('Throws error if argument is not an array', () => {
    expect(() => analyzeArray("Hello world!")).toThrow(TypeError);
});