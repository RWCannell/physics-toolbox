class ThreeVector {
    private _threeVector: number[];

    constructor(value: number[]) {
        if (typeof value === "undefined") {
            this._threeVector = ThreeVector.nullThreeVector;
        } else {
            this._threeVector = value;
        }
    }

    /**
     * Return the numerical values of the three-vector
     */
    public get threeVector(): number[] {
        return this._threeVector;
    }
    
    /**
     * Initialise the null vector.
     */
    public static get nullThreeVector(): number[] {
        return [0, 0, 0];
    }

    /**
     * Initialise the unit vector in the x-direction.
     */
    public static get xThreeVector(): number[] {
        return [1, 0, 0];
    }

    /**
     * Initialise the unit vector in the y-direction.
     */
    public static get yThreeVector(): number[] {
        return [0, 1, 0];
    }

    /**
     * Initialise the unit vector in the z-direction.
     */
    public static get zThreeVector(): number[] {
        return [0, 0, 1];
    }

    public static add(v: ThreeVector, w: ThreeVector): ThreeVector {
        const result: number[] = [];
        for (let i: number = 0; i < 3; i++) {
            result[i] = v.threeVector[i] + w.threeVector[i];
        }
        return new ThreeVector(result);
    }

    public static subtract(v: ThreeVector, w: ThreeVector): ThreeVector {
        const result: number[] = [];
        for (let i: number = 0; i < 3; i++) {
            result[i] = v.threeVector[i] - w.threeVector[i];
        }
        return new ThreeVector(result);
    }

    public static scalarMultiply(v: ThreeVector, alpha: number): ThreeVector {
        const result: number[] = [];
        for (let i: number = 0; i < 3; i++) {
            result[i] = v.threeVector[i]*alpha;
        }
        return new ThreeVector(result);
    }

    public static magnitude(v: ThreeVector): number {
        let result: number = 0;
        for (let i: number = 0; i < 3; i++) {
            result += v.threeVector[i]*v.threeVector[i];
        }
        return result;
    }
}

export default ThreeVector;