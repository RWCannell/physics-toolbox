class Polynomial {
    private _polynomial: {
        degree: number;
        expression: string;
        value?: number;
    };
    private _polynomialCoefficients: number[];
    /**
     * The coefficients of a polynomial, i.e. [p0, p1,..., pn] where p(x) = p0 + p1x + ... + pnx^n.
     * @param coefficients 
     */
    constructor(coefficients: number[], pointOfEvaluation?: number) {
        let degree: number = 0;
        if (!coefficients || coefficients.length === 0) {
            this._polynomial = {
                degree: degree,
                expression: "0",
                value: 0,
            };
            this._polynomialCoefficients = [];
        } else {
            degree = coefficients.length - 1;
            let evaluated = 0;
            const terms: string[] = [];
            for (let i = 0; i < coefficients.length; i++) {
                terms.push(`${coefficients[i]}x^${i}`);
                if (pointOfEvaluation) {
                    evaluated += coefficients[i]*pointOfEvaluation**i;
                }
            }
            const expression = terms.join("+");
            this._polynomial = {
                degree: degree,
                expression: expression,
                value: evaluated,
            };
            this._polynomialCoefficients = coefficients;
        }

    }

    /**
     * Return the polynomial object
     */
    public get polynomial(): {
        degree: number;
        expression: string;
        value?: number;
    } {
        return this._polynomial;
    }

    /**
     * Return the array of polynomial coefficients
     */
    public get polynomialCoefficients(): number[] {
        return this._polynomialCoefficients;
    }
}

export default Polynomial