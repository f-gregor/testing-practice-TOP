const caesarCipher = require("./caesarCipher.js");

test("Works with lowercase letters",() => {
    expect(caesarCipher("hello", 5)).toEqual("mjqqt");
});

test("Works with uppercase letters",() => {
    expect(caesarCipher("XYZ", 3)).toEqual("ABC");
});

test("Works with upper and lower case letters",() => {
    expect(caesarCipher("HyDra", 8)).toEqual("PgLzi");
});

test("Works with negative shift",() => {
    expect(caesarCipher("GitHub", -2)).toEqual("EgrFsz");
});

test("Works with special characters ",() => {
    expect(caesarCipher("Ban4na, Smooth|ie", 4)).toEqual("Fer4re, Wqssxl|mi");
});

test("Works with shifts arbitrary large ",() => {
    expect(caesarCipher("MonkeyType", 53)).toEqual("NpolfzUzqf");
});

test("Throws error with non numeric shift",() => {
    expect(() => caesarCipher("Apple", "7")).toThrow(TypeError);
});

test("Throws error with non integer shift",() => {
    expect(() => caesarCipher("Intel", 2.3)).toThrow(TypeError);
});