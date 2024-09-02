const reverseString = require("./reverseString.js");

const testCases = [
    {
        'label': "Test case 1",
        'input': "Hello world!",
        'expected': "!dlrow olleH"
    },
    {
        'label': "Test case 2",
        'input': "The small brown fox jumps over the lazy dog",
        'expected': "god yzal eht revo spmuj xof nworb llams ehT"
    },
    {
        'label': "Palindrome string",
        'input': "able was I ere I saw elba",
        'expected': "able was I ere I saw elba"
    }
]

testCases.forEach((obj) => {
    test(obj.label, () => {
        expect(reverseString(obj.input)).toBe(obj.expected);
    })
});