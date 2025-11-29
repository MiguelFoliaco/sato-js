export { }

declare global {

    interface Number {

        /** Millisecond to Second */
        readonly msToS: number;

        /** Second to Millisecond */
        readonly sToMs: number;

        /** Millisecond to Minute */
        readonly msToMin: number;

        /** Minute to Millisecond */
        readonly minToMs: number;

        /** Millisecond to Hour */
        readonly msToH: number;

        /** Hour to Millisecond */
        readonly hToMs: number;

        /** Millisecond to Day */
        readonly msToD: number;

        /** Day to Millisecond */
        readonly dToMs: number;

        /** Millisecond to Month */
        readonly msToM: number;

        /** Month to Millisecond */
        readonly mToMs: number;

        /** Millisecond to Year */
        readonly msToY: number;

        /** Year to Millisecond */
        readonly yToMs: number;

        // Seconds

        /** Second to Minute */
        readonly sToMin: number;

        /** Minute to Second */
        readonly minToS: number;

        /** Second to Hour */
        readonly sToH: number;

        /** Hour to Second */
        readonly hToS: number;

        /** Second to Day */
        readonly sToD: number;

        /** Day to Second */
        readonly dToS: number;

        /** Second to Month */
        readonly sToM: number;

        /** Month to Second */
        readonly mToS: number;

        /** Second to Year */
        readonly sToY: number;

        /** Year to Second */
        readonly yToS: number;


        //Minutes

        /** Minute to Hour */
        readonly minToH: number;

        /** Hour to Minute */
        readonly hToMin: number;

        /** Minute to Day */
        readonly minToD: number;

        /** Day to Minute */
        readonly dToMin: number;

        /** Minute to Month */
        readonly minToM: number;

        /** Month to Minute */
        readonly mToMin: number;

        /** Minute to Year */
        readonly minToY: number;

        /** Year to Minute */
        readonly yToMin: number;

        // Hours

        /** Hour to Day */
        readonly hToD: number;

        /** Day to Hour */
        readonly dToH: number;

        /** Hour to Month */
        readonly hToM: number;

        /** Month to Hour */
        readonly mToH: number;

        /** Hour to Year */
        readonly hToY: number;

        /** Year to Hour */
        readonly yToH: number;

        // Days

        /** Day to Month */
        readonly dToM: number;

        /** Month to Day */
        readonly mToD: number;

        /** Day to Year */
        readonly dToY: number;

        /** Year to Day */
        readonly yToD: number;

        // Months

        /** Month to Year */
        readonly mToY: number;

        /** Year to Month */
        readonly yToM: number;
    }

}