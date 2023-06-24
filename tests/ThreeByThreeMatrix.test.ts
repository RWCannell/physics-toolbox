import ThreeByThreeMatrix from "../lib/ThreeByThreeMatrix";
import ThreeVector from "../lib/ThreeVector";

let A: ThreeByThreeMatrix = new ThreeByThreeMatrix([[1, 2, -4], [-5, 0, 2], [9, -2, -3]]);
let B: ThreeByThreeMatrix = new ThreeByThreeMatrix([[5, 1, -1], [6, -2, 4], [8, 7, -3]]);
let v: ThreeVector = new ThreeVector([3, -4, 7]);
let alpha: number = -5;

test("Should return correct value for 'add' function", () => {
    const result = new ThreeByThreeMatrix([[6, 3, -5], [1, -2, 6], [17, 5, -6]]);
    expect(A.add(B)).toStrictEqual(result);
});

test("Should return correct value for 'subtract' function", () => {
    const result = new ThreeByThreeMatrix([[-4, 1, -3], [-11, 2, -2], [1, -9, 0]]);
    expect(A.subtract(B)).toStrictEqual(result);
});

test("Should return correct value for 'scalarMultiply' function", () => {
    const result = new ThreeByThreeMatrix([[-5, -10, 20], [25, -0, -10], [-45, 10, 15]]);
    expect(A.scalarMultiply(alpha)).toStrictEqual(result);
});

test("Should return correct value for 'multiply'", () => {
    const result = new ThreeByThreeMatrix([[-15, -31, 19], [-9, 9, 14], [9, -8, -8]]);
    expect(A.multiply(B)).toStrictEqual(result);
});

test("Should return correct value for 'vectorMultiply'", () => {
    const result = new ThreeVector([-33, -1, 14]);
    expect(A.vectorMultiply(v)).toStrictEqual(result);
});