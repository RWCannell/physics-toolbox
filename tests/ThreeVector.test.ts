import ThreeVector from "../lib/ThreeVector";

let v: ThreeVector = new ThreeVector([3, -4, 7]);
let w: ThreeVector = new ThreeVector([-1, 6, -2]);
let alpha: number = -5;
let beta: number = 8;

test("Should return correct value for 'magnitude' function", () => {
    expect(v.magnitude()).toEqual(8.6);
});

test("Should return correct value for 'add' function", () => {
    const result = new ThreeVector([2, 2, 5]);
    expect(v.add(w)).toStrictEqual(result);
});

test("Should return correct value for 'subtract' function", () => {
    const result = new ThreeVector([4, -10, 9]);

    expect(v.subtract(w)).toStrictEqual(result);
});

test("Should return correct value for 'scalarMultiply' when scalar is negative", () => {
    const result = new ThreeVector([-15, 20, -35]);
    expect(v.scalarMultiply(alpha)).toStrictEqual(result);
});

test("Should return correct value for 'scalarMultiply' when scalar is positive", () => {
    const result = new ThreeVector([24, -32, 56]);
    expect(v.scalarMultiply(beta)).toStrictEqual(result);
});