'use strict';
/* . Write function to Implement the legendary Caesar cipher.
What is Caesar cipher?
In cryptography, a Caesar cipher, also known as Caesar's
cipher, the shift cipher, Caesar's code or Caesar shift, is
o n e o f t h e s i m p l e s t a n d m o s t w i d e l y
known encryption techniques. It is a type of substitution
cipher in which each letter in the plaintext is replaced by a
letter some fixed number of positions down the alphabet. For
example, with a left shift of 3, D would be replaced
by A, E would become B, and so on. The method is named
after J u l i u s C a e s a r , w h o u s e d i t i n h i s p r i v a t e
correspondence.(https://en.wikipedia.org/wiki/Caesar_cipher)
Write a function that takes a string to be encoded and a shift
factor and then returns the encoded string. See examples blow:
caesar('A', 1) // simply shifts the letter by 1: returns 'B'
caesar('Hello, World!', 5) //returns 'Mjqqt, Btwqi!'
caesar('Z', 1) // returns 'A'
Hints:
• Use charCodeAt and fromCharCode to work with alphabets.
• You don not need to work on punctuations. 
*/

function caesar(str, num) {
    const arr = [];
    const text = /[a-zA-Z]/;
    for (const i of str) {
        if (text.test(i)) {
            const lowerCaseText = i === i.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            const diff = i.charCodeAt(0) - lowerCaseText;
            const shift = num >= 0 ? diff + num : diff + Math.abs(26 - Math.abs(num));
            const cipher = shift % 26 + lowerCaseText;
            arr.push(String.fromCharCode(cipher));
        } else { 
            arr.push(i); 
        }
    }

    return arr.join('');
}




console.log(caesar('Hello, World!', 5))
console.log(caesar('A', 1))
console.log(caesar('Z', 1))
console.log(caesar('Mjqqt, Btwqi!', -5))

/* Write decoder for the Caesar cipher above. For example:
caesar('Mjqqt, Btwqi!', -5) //returns 'Hello, World!' */

module.exports = caesar;