// Complete the solution so that it reverses the string passed into it.
function Reverse(strForRevers) {
    return strForRevers.split('').reverse().join('');
  }

// Remove First and Last Character
 function Character(wordForRemove) {
    return wordForRemove.slice(1, -1);
 }


// Palindrom
function Palindrom(wordOfPalindrom) {
    let stringOfPalindrom = String(wordOfPalindrom);
    return stringOfPalindrom === stringOfPalindrom.split('').reverse().join('');    
}


// Anagram 
function Anagram (a, b) {
    let y = a.split('').sort().join(''),
        z = b.split('').sort().join('');
        console.log(z == y ? true : false);
    }


// Birthday I - Cake 
const CountAllLetters = (lettersForCount) => {
    let countLetters = null;
    for (i = 0; i < lettersForCount.length; i++) {
      countLetters += lettersForCount[i].charCodeAt();
      console.log(lettersForCount[i]);
    }
    return countLetters;
  }; 