
declare global {
    interface String {
        /**
         * @author SatoJS
        * Checks if the string is a valid email address.
        * @returns {boolean} True if the string is a valid email address, false otherwise.
        * @example
        * 'sato'.isEmail // false
        */
        isEmail: boolean;
        /**
         * Checks if the string is a valid date.
         * @returns {boolean} True if the string is a valid date, false otherwise.
         */
        isDate(): boolean
        /**
        * @author SatoJS
        * @param sequence Describe the current format to eval
        * @param separator Is the separator for the format, default '-'
        * @example
        * '311-111-1111'.isFormat('###-###-####', '-') // true
        * '311-111-1111'.isFormat('##-###-###-####', '-') // false
        * @returns boolean
        */
        isFormat(sequence: string, separator: string): boolean;

        /**
        * @author SatoJS
        * @param sequence Describe the format to convert
        * @param separator Is the separator for the format, default '-'
        * @description If the text is shorter than the sequence, it is not padded; the original length plus the separators is retained. If it is longer, it is truncated.
        * @example
        * '3111111111'.format('###-###-####', '-') // '311-111-1111'
        * '31111111'.format('###-###-####', '-') // '311-111-11'
        * '3111111111'.format('###-###-####-##', '-') // '311-111-1111-'
        * @returns string
        */
        format(sequence: string, separator: string): string
    }

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