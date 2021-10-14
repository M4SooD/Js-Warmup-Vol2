const repeatString = require('./app.js')
describe('repeating the string',()=>{
    test('check to see if string is repeated', () => {
        expect(repeatString("abc", "6")).toBe("abcabcabcabcabcabc");
      })
    });