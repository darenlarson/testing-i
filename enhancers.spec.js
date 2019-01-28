const enhancer = require('./enhancers.js');

describe('enhancer library', () => {
    describe('success() method', () => {
        // it('should throw an error if a string is not entered', () => {
        //     expect(() => {
        //       enhancer.success(234234);
        //     }).toThrow();
        //   });

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
    });
});

