/* Write a function that simply repeats the string based on
given number of times. The function accepts two argument: a
string and a number.
repeatString('Ha', 2) // returns 'HaHa'
Make sure your function checks second number is a number.
For example if a second entry is “5”, your function has to
change it to 5.
Also try to write it with Arrow function syntax.
Hints:
• You need a loop.
• Create a variable to hold the string you're going to
return, create a loop that repeats the given number of
times and add the given string to the result on each loop.
• Have you heard of concatenation? 
*/

function repeatStringNumTimes (str, num) {
    if (num <= 0) {
        return ''
    }
    let repeatedString = '';
    for (let i= 0; i <num; i++) {
        repeatedString += str
  // i = 0  ''             += 'abc'
  // i = 1  'abc'          += 'abc'
  // i = 2  'abcabc'       += 'abc'
  // i = 3  'abcabcabc'
    }
    return repeatedString;
}

console.log(repeatStringNumTimes("abc", "6"));