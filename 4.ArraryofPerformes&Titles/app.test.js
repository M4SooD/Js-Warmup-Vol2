const {getFields, events} = require ('./app') 

describe('getting array out of the object',()=>{
    test('check to see if the wanted array is out or not', () => {
        expect(getFields(events, 'performer')[0]).toBe('Joe kelly');
      })
      test('check to see if the array have the length of two', () => {
        expect(getFields(events, 'performer').length).toBe(2);
      })
    });