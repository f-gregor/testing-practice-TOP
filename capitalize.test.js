const capitalize = require("./capitalize.js");

const testCases = [
    {
        'label': "Word starting with lowercase letter 1",
        'input': "hello",
        'expected': "Hello"
    },
    {
        'label': "Word starting with lowercase letter 2",
        'input': "superhero",
        'expected': "Superhero"
    },
    {
        'label': "Word starting with uppercase letter",
        'input': "Sausage",
        'expected': "Sausage"
    },
    {
        'label': "Word starting without a letter",
        'input': "@lpha male",
        'expected': "@lpha male"
    },
    {
        'label': "Word of length zero",
        'input': "",
        'expected': ""
    }
]

testCases.forEach((obj) => {
    test(obj.label, () => {
        expect(capitalize(obj.input)).toBe(obj.expected);
    })
});

