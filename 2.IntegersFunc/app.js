'use strict';
/* Implement a function that takes 2 integers and returns the sum
of every number between(and including) them. For example if
user enters 20 and 25, our function needs to calculate
20+21+22+23+24+25 and return the result.
You can use loop. You can also use recursive calls too.
Hints:
Think about how you would do this on pen and paper (Desk
checking) and then turn it to code.
• Make sure you pay attention to the function parameters
• Create a variable to hold the final sum and initialize to
zero.
• loop through the given numbers
• On each iteration add the number to the sum variable.
• return the sum after finishing the loop 
*/

const sumAll = function(a, b) {
    if(isNaN(a) || isNaN(b)) return 'ERROR';
    if(a < 0 || b < 0) return 'ERROR'
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    for (let i = min; i <= max; i++)
        sum = sum + i
    return sum;
  };
  
  console.log(sumAll('Hello', 'World!'));
  console.log(sumAll(6, 8));
  console.log(sumAll(-1, -1));

  module.exports = sumAll;