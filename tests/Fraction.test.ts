import Fraction from "../lib/Fraction";

let frac: Fraction;

describe("Tests for ThreeVector", () => {
    beforeEach(() => {
        frac = new Fraction(3, 4);
    });

    test("Should return correct value for 'add' function", () => {
        let result: Fraction = new Fraction(11, 12);
        expect(frac.add(1,6)).toStrictEqual(result);
    });

    test("Should return correct value for 'subtract' function", () => {
        let result: Fraction = new Fraction(7, 12);
        expect(frac.subtract(1,6)).toStrictEqual(result);
    });

    test("Should return correct value for 'multiply' function", () => {
        let result: Fraction = new Fraction(1, 8);
        expect(frac.multiply(1,6)).toStrictEqual(result);
    });

    test("Should return correct value for 'divide' function", () => {
        let result: Fraction = new Fraction(9, 2);
        expect(frac.divide(1,6)).toStrictEqual(result);
    });
});