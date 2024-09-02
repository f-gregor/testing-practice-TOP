const calculator = require("./calculator.js");

// Tests for addition

test("Add: Integers",() => {
    expect(calculator.add(2, 3)).toEqual(5);
});

test("Add: Floats",() => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Add: Negative number",() => {
    expect(calculator.add(-3, 4)).toEqual(1);
});

test("Add: Negative numbers",() => {
    expect(calculator.add(-3, -0.7)).toBeCloseTo(-3.7);
});

test("Add: Number as string",() => {
    expect(() => calculator.add(1, "4")).toThrow(TypeError);
});

// Tests for subtraction

test("Subtract: Integers",() => {
    expect(calculator.subtract(7, 3)).toEqual(4);
});

test("Subtract: Floats",() => {
    expect(calculator.subtract(0.5, 0.2)).toBeCloseTo(0.3);
});

test("Subtract: Negative number",() => {
    expect(calculator.subtract(-3, 4)).toEqual(-7);
});

test("Subtract: Negative numbers",() => {
    expect(calculator.subtract(-3, -0.7)).toBeCloseTo(-2.3);
});

test("Subtract: Number as string",() => {
    expect(() => calculator.subtract(1, "4")).toThrow(TypeError);
});

// Tests for multiplication

test("Multiply: Integers",() => {
    expect(calculator.multiply(4, 5)).toEqual(20);
});

test("Multiply: Floats",() => {
    expect(calculator.multiply(0.8, 1.2)).toBeCloseTo(0.96);
});

test("Multiply: Negative number",() => {
    expect(calculator.multiply(-3, 4)).toEqual(-12);
});

test("Multiply: Negative numbers",() => {
    expect(calculator.multiply(-3, -0.7)).toBeCloseTo(2.1);
});

test("Multiply: Number as string",() => {
    expect(() => calculator.multiply(1, "4")).toThrow(TypeError);
});

// Tests for division

test("Divide: Integers",() => {
    expect(calculator.divide(36, 6)).toEqual(6);
});

test("Divide: Floats",() => {
    expect(calculator.divide(4.5, 0.9)).toEqual(5);
});

test("Divide: Negative number",() => {
    expect(calculator.divide(-3, 4)).toBeCloseTo(-0.75);
});

test("Divide: Negative numbers",() => {
    expect(calculator.divide(-1.2, -1.8)).toBeCloseTo(2/3);
});

test("Divide: Division by zero",() => {
    expect(() => calculator.divide(20, 0)).toThrow('division by zero');
});

test("Divide: Number as string",() => {
    expect(() => calculator.divide(1, "4")).toThrow(TypeError);
});