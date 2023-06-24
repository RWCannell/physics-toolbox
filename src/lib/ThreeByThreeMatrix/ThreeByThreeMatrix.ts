import ThreeVector from "../ThreeVector/ThreeVector";

class ThreeByThreeMatrix {
    private _threeByThreeMatrix: number[][];

    constructor(value: number[][]) {
        if (typeof value === "undefined") {
            this._threeByThreeMatrix = ThreeByThreeMatrix.nullMatrix;
        } else {
            this._threeByThreeMatrix = value;
        }
    }

    /**
     * Return the numerical values of the three-by-three matrix
     */
    public get threeByThreeMatrix(): number[][] {
        return this._threeByThreeMatrix;
    }
    
    /**
     * Initialise the null matrix.
     */
    public static get nullMatrix(): number[][] {
        return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }

    /**
     * Initialise the identity matrix.
     */
    public static get identityMatrix(): number[][] {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    }

    public static add(A: ThreeByThreeMatrix, B: ThreeByThreeMatrix): ThreeByThreeMatrix {
        const result: number[][] = [];
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = A.threeByThreeMatrix[i][j] + B.threeByThreeMatrix[i][j];
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public static subtract(A: ThreeByThreeMatrix, B: ThreeByThreeMatrix): ThreeByThreeMatrix {
        const result: number[][] = [];
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = A.threeByThreeMatrix[i][j] - B.threeByThreeMatrix[i][j];
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public static scalarMultiply(A: ThreeByThreeMatrix, alpha: number): ThreeByThreeMatrix {
        const result: number[][] = [];
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = A.threeByThreeMatrix[i][j]*alpha;
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public static multiply(A: ThreeByThreeMatrix, B: ThreeByThreeMatrix): ThreeByThreeMatrix {
        const result: number[][] = [];
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = 0;
                for (let k: number = 0; k < 3; k++) {
                    result[i][j] += A.threeByThreeMatrix[i][k]*B.threeByThreeMatrix[k][j];
                }
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public static vectorMultiply(A: ThreeByThreeMatrix, v: ThreeVector): ThreeVector {
        const result: number[] = [];
        for (let i: number = 0; i < 3; i++) {
            result[i] = 0;
            for (let j: number = 0; j < 3; j++) {
                result[i] += v.threeVector[i]*A.threeByThreeMatrix[i][j];
            }
        }
        return new ThreeVector(result);
    }
}

export default ThreeByThreeMatrix;