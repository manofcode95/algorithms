// Challenge
// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// Sample Test Cases

// Input:"hello*3"

// Output:Ifmmp*3

// Input:"fun times!"

// Output:gvO Ujnft!

function LetterChanges(str) {
  let newStr = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.trim().toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt(0);
    if (index >= 97 && index <= 122) {
      let newChar = String.fromCharCode(index + 1);
      if (!vowels.includes(newChar)) {
        newStr += newChar;
      } else {
        newStr += newChar.toUpperCase();
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(LetterChanges('hello*3'));
