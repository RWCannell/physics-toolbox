import Polynomial from "../lib/Polynomial";

let p: Polynomial = new Polynomial([3, 6, 1], 10);
let q: Polynomial = new Polynomial([4, -2, 0, -2], 5);
let nullPolynomial = new Polynomial([]);

describe("Tests for Polynomial", () => {
    test("Should initialize Polynomial with only positive coefficients", () => {
        expect(p.polynomial.degree).toEqual(2);
        expect(p.polynomial.expression).toStrictEqual("3x^0+6x^1+1x^2");
        expect(p.polynomial.value).toEqual(163);
    });

    test("Should initialize Polynomial with some negative coefficients", () => {
        expect(q.polynomial.degree).toEqual(3);
        expect(q.polynomial.expression).toStrictEqual("4x^0+-2x^1+0x^2+-2x^3");
        expect(q.polynomial.value).toEqual(-256);
    });

    test("Should initialize nullPolynomial correctly", () => {
        expect(nullPolynomial.polynomial.degree).toEqual(0);
        expect(nullPolynomial.polynomial.expression).toStrictEqual("0");
        expect(nullPolynomial.polynomial.value).toEqual(0);
    });
});