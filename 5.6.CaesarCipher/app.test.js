const caesar = require('./app')

describe('Implementing Caesar cipher',()=>{
    test('check to see if the string is shifted properly or not', () => {
        expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
      })
      test('check to see if we have the revrese caeser cipher', () => {
        expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
      })
    });