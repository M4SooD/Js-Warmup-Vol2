const palindromes = require('./app')

describe('palindrome detection',()=>{
    test('check to see if its a true palindrome or not', () => {
        expect(palindromes('racecar')).toBe(true);
      })
    });