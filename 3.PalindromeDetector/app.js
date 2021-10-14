/* Write a function to detect palindrome. A palindrome is a
string that is spelled the same both forwards and backwards,
usually without considering punctuation or word breaks and
return true or false. For example:
palindromes('racecar') // true
palindromes(‘jungle') // false
*/

function palindromes(str) {
    let onlyLetters = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    onlyLetters = onlyLetters.toLowerCase().split("");
    for (let i = 0; i < onlyLetters.length - 1 / 2; i++)
    if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
        return false;
    } else {
        return true;
    }


}

console.log(palindromes('jungle'))
console.log(palindromes('racecar'))