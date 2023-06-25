import Fraction from "../lib/Fraction";

let f: Fraction;
let g: Fraction;
let alpha: number;
let beta: number;

describe("Tests for ThreeVector", () => {
    beforeEach(() => {
        f = new Fraction(3, 4);
        g = new Fraction(1, 6);
        alpha = -5;
        beta = 8;
    });

    test("Should return correct value for 'add' function", () => {
        let result: Fraction = new Fraction(11, 12);
        expect(f.add(1,6)).toStrictEqual(result);
    });

    test("Should return correct value for 'subtract' function", () => {
        let result: Fraction = new Fraction(7, 12);
        expect(f.subtract(1,6)).toStrictEqual(result);
    });

    test("Should return correct value for 'multiply' function", () => {
        let result: Fraction = new Fraction(1, 8);
        expect(f.multiply(1,6)).toStrictEqual(result);
    });

    test("Should return correct value for 'divide' function", () => {
        let result: Fraction = new Fraction(9, 2);
        expect(f.divide(1,6)).toStrictEqual(result);
    });
});