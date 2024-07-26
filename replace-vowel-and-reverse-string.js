// ### Problem Description
//
// Write a function printMysteriousString that takes a string `s` and returns a new string that satisfies the following conditions:
// 1. Replace every vowel in the string with the next vowel in the sequence (a -> e, e -> i, i -> o, o -> u, u -> a).
// 2. Reverse the order of the words in the string. Words are defined as sequences of characters separated by spaces.
// 3. Maintain the original spacing between words (leading, trailing, and between words). (not required) 
//
// ### Example Cases
//
// - printMysteriousString("hello world") should return "wurld hillu"

const printMysteriousString = (sentence) => {
  const vowelReplacedString = sentence.toLowerCase().split('').map(letter => replaceVowels(letter)).join('');
  const result = vowelReplacedString.split(' ').reverse().join(' ');

  return result
}

const replaceVowels = (vowel) => {
  switch(vowel) {
    case 'a':
      return 'e';
      break;
    case 'e':
      return 'i';
      break;
    case 'i':
      return 'o';
      break;
    case 'o':
      return 'u';
      break;
    case 'u':
      return 'a';
     break;
   default:
     return vowel
  }
}

console.log(printMysteriousString('hello world'))