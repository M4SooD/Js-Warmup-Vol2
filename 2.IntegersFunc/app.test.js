const sumAll = require('./app')

describe('gettin the sum of all number between (and also include them)',()=>{
    test('check to se if we have the sum off all the numbers', () => {
        expect(sumAll(6, 8)).toBe(21);
      })
    });