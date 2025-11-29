export { }
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
        format(sequence: string, separator: string): string;


        /**
         * @author SatoJS
         * @param length Maximum length at which trimming begins
         * @param end  String to add to the end of the truncated string. default is '...'
         * 
         * @example
         * '123456789'.truncate(5) // '12345'
         * '123456789'.truncate(5, '...') // '12345...'
         * 
         * @returns string
         */
        truncate(length: number, end?: string): string
    }

}