class Fraction {
    private _fraction: {
        numerator: number;
        denominator: number;
    };

    constructor(numerator: number, denominator: number) {
        if (denominator === 0 || !numerator || !denominator) {
            this._fraction = {
                numerator: 0,
                denominator: 0
            };
        } else {
            this._fraction = {
                numerator: numerator,
                denominator: denominator
            };
        }
    }

    /**
     * Return the numerator and denominator of a fraction.
     */
    public get fraction(): {} {
        return this._fraction;
    }

    /**
     * Find the greatest common divisor of two numbers.
     */
    private greatestCommonDivisor(a: number, b: number): number {
        // let gcd: number = 1;
        if (a === 0 && b === 0) {
            return NaN;
        }
        if (a === 0) {
            return b;
        } else if (b === 0) {
            return a;
        } else if ((a % b === 0) && (a > b)) {
            return b;
        } else if ((b % a === 0) && (b > a)) {
            return a;
        } else if (a > b) {
            let rem = a % b;
            return this.greatestCommonDivisor(b, rem);
        } else {
            let rem = b % a;
            return this.greatestCommonDivisor(a, rem);
        }
    }
    
    public add(a: number, b: number): Fraction {
        let self = this._fraction;
        const numeratorProduct = self.numerator*b + a*self.denominator;
        const denominatorProduct = self.denominator*b;
        const gcd = this.greatestCommonDivisor(numeratorProduct, denominatorProduct);
        const numerator = numeratorProduct/gcd;
        const denominator = denominatorProduct/gcd;

        return new Fraction(numerator, denominator);
    }

    public subtract(a: number, b: number): Fraction {
        let self = this._fraction;
        const numeratorProduct = self.numerator*b - a*self.denominator;
        const denominatorProduct = self.denominator*b;
        const gcd = this.greatestCommonDivisor(numeratorProduct, denominatorProduct);
        const numerator = numeratorProduct/gcd;
        const denominator = denominatorProduct/gcd;

        return new Fraction(numerator, denominator);
    }

    public multiply(a: number, b: number): Fraction {
        let self = this._fraction;
        const numeratorProduct = self.numerator*a;
        const denominatorProduct = self.denominator*b;
        const gcd = this.greatestCommonDivisor(numeratorProduct, denominatorProduct);
        const numerator = numeratorProduct/gcd;
        const denominator = denominatorProduct/gcd;

        return new Fraction(numerator, denominator);
    }

    public divide(a: number, b: number): Fraction {
        let self = this._fraction;
        const numeratorProduct = self.numerator*b;
        const denominatorProduct = self.denominator*a;
        const gcd = this.greatestCommonDivisor(numeratorProduct, denominatorProduct);
        const numerator = numeratorProduct/gcd;
        const denominator = denominatorProduct/gcd;

        return new Fraction(numerator, denominator);
    }
}

export default Fraction;