import ThreeVector from "../lib/ThreeVector";

let v: ThreeVector;
let w: ThreeVector;
let alpha: number;
let beta: number;

describe("Tests for ThreeByThreeMatrix", () => {
    beforeEach(() => {
        v = new ThreeVector([3, -4, 7]);
        w = new ThreeVector([-1, 6, -2]);
        alpha = -5;
        beta = 8;
    });
    
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
});