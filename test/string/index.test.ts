import '../../src/string';



describe('String Prototype Extensions', () => {
    describe('isEmail', () => {
        it('should return true for valid email addresses', () => {
            const emails = [
                ['sato', false],
                ['sato@', false],
                ['sato@gmail', false],
                ['sato@gmail.', false],
                ['sato@gmail.c', true],
                ['sato@gmail.co', true],
                ['sato@gmail.com', true],
            ]
            for (const email of emails) {
                expect((email[0] as string).isEmail).toBe(email[1]);
            }
        });
    });
    describe('isDate', () => {
        // YYYY-MM-DD
        const date = '2023-01-01'
        const noDate = '2023-31-01'
        const datetime = '2023-01-01T00:00:00.000Z'

        it('should boolean is valid date', () => {
            expect(date.isDate).toBe(true);
            expect(noDate.isDate).toBe(false);
            expect(datetime.isDate).toBe(true);
        });

    })

    // Format
    describe('isFormat', () => {
        const phone = '311-111-1111'

        it('should return true for valid email addresses', () => {
            expect(phone.isFormat('###-###-####', '-')).toBe(true);
            expect(phone.isFormat('##-###-###-####', '-')).toBe(false)
        });
        it('should return false for valid email addresses', () => {
            expect(phone.isFormat('##-###-###-####', '-')).toBe(false);
        });
    })

    describe('format', () => {
        const phoneWithoutFormat = '3111111111'
        it('should return string with formart', () => {
            expect(phoneWithoutFormat.format('###-###-##', '-')).toBe('311-111-11');
            expect(phoneWithoutFormat.format('###-###-####-#', '-')).toBe('311-111-1111-');
            expect(phoneWithoutFormat.format('###-###-####', '-')).toBe('311-111-1111');
        })
    })
});