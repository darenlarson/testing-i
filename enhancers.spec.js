const enhancer = require('./enhancers.js');

describe('enhancer library', () => {
    describe('success() method', () => {
        test('enhancing success increases enhancing level and updates name', () => {
            // arrange / setup
            const input = {
                originalName: 'Lambda Shield',
                name: 'Lambda Shield',
                type: 'armor',
                durability: 100,
                enhancement: 0,
                enhancementLevel: 0,
            }

            const expected = {
                originalName: 'Lambda Shield',
                name: '[+1] Lambda Shield',
                type: 'armor',
                durability: 100,
                enhancement: '+1',
                enhancementLevel: 1,
            };

            // act - execute the SUT (System Under Test)
            const actual = enhancer.success(input);

            // assert
            expect(actual).toEqual(expected);
        });

        it('should throw an error if an object is not passed in as an arguemtn', () => {
            expect(() => {
                enhancer.success('this is a string');
            }).toThrow();
        });
    });
    describe('fail() method', () => {
        test('enhancing fail decreases enhancementLevel by 1 if it is currently > 16', () => {
            // arrange / setup
            const input = {
                originalName: 'Lambda Shield',
                name: '[PEN] Lambda Shield',
                type: 'armor',
                durability: 100,
                enhancement: 'PEN',
                enhancementLevel: 20,
            };
            const expected = {
                originalName: 'Lambda Shield',
                name: '[TET] Lambda Shield',
                type: 'armor',
                durability: 90,
                enhancement: 'TET',
                enhancementLevel: 19,
            };

            // act - execute the SUT (System Under Test)
            const actual = enhancer.fail(input);

            // assert
            expect(actual).toEqual(expected);
        })
    })
    describe('repair() method', () => {
        it('should increase the durability to 100 and return the rest of the object unchanged', () => {
            // arrange / setup
            const input = {
                originalName: 'Lambda Shield',
                name: '[PEN] Lambda Shield',
                type: 'armor',
                durability: 50,
                enhancement: 'PEN',
                enhancementLevel: 20,
            };
            const expected = {
                originalName: 'Lambda Shield',
                name: '[PEN] Lambda Shield',
                type: 'armor',
                durability: 100,
                enhancement: 'PEN',
                enhancementLevel: 20,
            };

            // act - execute the SUT (System Under Test)
            const actual = enhancer.repair(input);

            // assert
            expect(actual).toEqual(expected);
        });
    });
})