import ThreeVector from "../ThreeVector";

class ThreeByThreeMatrix {
    private _threeByThreeMatrix: [[number, number, number], [number, number, number], [number, number, number]];

    constructor(matrix: [[number, number, number], [number, number, number], [number, number, number]]) {
        if (typeof matrix === "undefined") {
            this._threeByThreeMatrix = ThreeByThreeMatrix.nullMatrix;
        } else {
            this._threeByThreeMatrix = matrix;
        }
    }
    
    /**
     * Return the numerical values of the three-by-three matrix
     */
    public get threeByThreeMatrix(): [[number, number, number], [number, number, number], [number, number, number]] {
        return this._threeByThreeMatrix;
    }
    
    /**
     * Initialise the null matrix.
     */
    public static get nullMatrix(): [[number, number, number], [number, number, number], [number, number, number]] {
        return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }

    /**
     * Initialise the identity matrix.
     */
    public static get identityMatrix(): [[number, number, number], [number, number, number], [number, number, number]] {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    }

    /**
     * Initialise a 3x3 matrix with random numbers.
     */
    public static get randomMatrix(): [[number, number, number], [number, number, number], [number, number, number]] {
        let result = ThreeByThreeMatrix.identityMatrix;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let randomNumberString = Math.random().toFixed(2);
                result[i][j] = parseInt(randomNumberString);
            }
        }
        return result;
    }

    public add(M: ThreeByThreeMatrix): ThreeByThreeMatrix {
        let result = this._threeByThreeMatrix;
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = this._threeByThreeMatrix[i][j] + M.threeByThreeMatrix[i][j];
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public subtract(M: ThreeByThreeMatrix): ThreeByThreeMatrix {
        let result = this._threeByThreeMatrix;
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = this._threeByThreeMatrix[i][j] - M.threeByThreeMatrix[i][j];
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public scalarMultiply(alpha: number): ThreeByThreeMatrix {
        let result = this._threeByThreeMatrix;
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = this._threeByThreeMatrix[i][j]*alpha;
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public multiply(M: ThreeByThreeMatrix): ThreeByThreeMatrix {
        let result = this._threeByThreeMatrix;
        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < 3; j++) {
                result[i][j] = 0;
                for (let k: number = 0; k < 3; k++) {
                    result[i][j] += this._threeByThreeMatrix[i][k]*M.threeByThreeMatrix[k][j];
                }
            }
        }
        return new ThreeByThreeMatrix(result);
    }

    public vectorMultiply(v: ThreeVector): ThreeVector {
        const firstRow = this._threeByThreeMatrix[0][0]*v.threeVector[0] + this._threeByThreeMatrix[0][1]*v.threeVector[1] + this._threeByThreeMatrix[0][2]*v.threeVector[2];
        const secondRow = this._threeByThreeMatrix[1][0]*v.threeVector[0] + this._threeByThreeMatrix[1][1]*v.threeVector[1] + this._threeByThreeMatrix[1][2]*v.threeVector[2];
        const thirdRow = this._threeByThreeMatrix[2][0]*v.threeVector[0] + this._threeByThreeMatrix[2][1]*v.threeVector[1] + this._threeByThreeMatrix[2][2]*v.threeVector[2];

        return new ThreeVector([firstRow, secondRow, thirdRow]);
    }
}

export default ThreeByThreeMatrix;