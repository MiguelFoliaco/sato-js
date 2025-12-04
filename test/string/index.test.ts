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


    describe('truncate', () => {
        const text = '123456789'
        it('should return string truncated', () => {
            expect(text.truncate(5)).toBe('12345...');
            expect(text.truncate(5, '...')).toBe('12345...');
            expect(text.truncate(5, '')).toBe('12345');
            expect(text.truncate(20, '..')).toBe('123456789');
        })
    })

    describe('slug', () => {

        const text = 'sato js is cool'
        const text2 = 'sato js is    cool'

        it('should return slug', () => {
            expect(text.toSlug()).toBe('sato-js-is-cool');
        })

        it('should return slug 2', () => {
            expect(text2.toSlug()).toBe('sato-js-is----cool');
        })
    })
    describe('lengthWithoutSpaces', () => {

        const text = 'sato js is cool'
        const text2 = 'sato js is    cool'

        it('should return slug', () => {
            expect(text.lengthWithoutSpaces()).toBe(12);
        })

        it('should return slug 2', () => {
            expect(text2.lengthWithoutSpaces()).toBe(12);
        })
    })
});