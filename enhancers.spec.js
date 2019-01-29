const enhancer = require('./enhancers.js');

describe('enhancer library', () => {
    describe('success() method', () => {
        it('should throw an error if the item entered is not in the items array', () => {
            expect(() => {
                enhancer.success('Elf Swords');
            }).toThrow();
            expect(() => {
                enhancer.success(2452);
            }).toThrow();
            expect(() => {
                enhancer.success(undefined);
            }).toThrow();
        });

        test('enhancing success increases enhancing level', () => {

            // arrange / setup
            const input = 'Lambda Shield'

            const expected = {
                originalName: 'Lambda Shield',
                name: '[+1] Lambda Shield',
                type: 'armor',
                durability: 100,
                enhancement: 1,
            };

            // act - execute the SUT (System Under Test)
            const actual = enhancer.success(input);

            // assert
            expect(actual).toEqual(expected);
        });

    });
});

