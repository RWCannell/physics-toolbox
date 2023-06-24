class ThreeVector {
    private _threeVector: [number, number, number];

    constructor(vector: [number, number, number]) {
        if (typeof vector === "undefined") {
            this._threeVector = ThreeVector.nullThreeVector;
        } else {
            this._threeVector = vector;
        }
    }

    /**
     * Return the numerical values of the three-vector.
     */
    public get threeVector(): [number, number, number] {
        return this._threeVector;
    }
    
    /**
     * Initialise the null vector.
     */
    public static get nullThreeVector(): [number, number, number] {
        return [0, 0, 0];
    }

    /**
     * Initialise the unit vector in the x-direction.
     */
    public static get xThreeVector(): [number, number, number] {
        return [1, 0, 0];
    }

    /**
     * Initialise the unit vector in the y-direction.
     */
    public static get yThreeVector(): [number, number, number] {
        return [0, 1, 0];
    }

    /**
     * Initialise the unit vector in the z-direction.
     */
    public static get zThreeVector(): [number, number, number] {
        return [0, 0, 1];
    }

    /**
     * Initialise a 3-vector with random numbers.
     */
    public static get randomThreeVector(): [number, number, number] {
        let result = ThreeVector.nullThreeVector;
        for (let i = 0; i < 3; i++) {
            let randomNumberString = Math.random().toFixed(2);
            result[i] = parseInt(randomNumberString);
        }
        return result;
    }

    public add(v: ThreeVector): ThreeVector {
        let result = this._threeVector;
        for (let i: number = 0; i < 3; i++) {
            result[i] = this._threeVector[i] + v.threeVector[i];
        }
        return new ThreeVector(result);
    }

    public subtract(v: ThreeVector): ThreeVector {
        let result: [number, number, number] = [0, 0, 0];
        for (let i: number = 0; i < 3; i++) {
            result[i] = this._threeVector[i] - v.threeVector[i];
        }
        return new ThreeVector(result);
    }

    public scalarMultiply(alpha: number): ThreeVector {
        let result = this._threeVector;
        for (let i: number = 0; i < 3; i++) {
                result[i] = this._threeVector[i]*alpha;
        }
        return new ThreeVector(result);
    }

    public magnitude(): number {
        let squaredResult: number = 0;
        for (let i: number = 0; i < 3; i++) {
            squaredResult += this._threeVector[i]*this._threeVector[i];
        }
        const result = Math.sqrt(squaredResult).toFixed(2);
        return parseFloat(result);
    }
}

export default ThreeVector;