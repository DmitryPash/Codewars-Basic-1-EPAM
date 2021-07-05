// Remove duplication from list 
let arrOfDUplicateNum = [1,2,3,4,5,5,6,6]
let sort_arrOfDUplicateNum = arrOfDUplicateNum.sort();
let result = [];
for (let index = 0; index < sort_arrOfDUplicateNum.length; index++) {  
    if (sort_arrOfDUplicateNum[index + 1] === sort_arrOfDUplicateNum[index]) {
        result.push(sort_arrOfDUplicateNum[index]);
    }
    else {
        false;
    }
}



// Sum of Positive
const countPositiveNum = (getForSum) => {
    let count = 0;
    getForSum.forEach((item) => {
      item > 0 ? (count += item) : false;
    });
    return count;
  };


// Fizz Buzz
const fizzbuzz = (numberOfDigits) => {
    let arrayOfNumbers = [];
    let sortedArray = [];
  
    for (i = 1; i <= numberOfDigits; i++) {
      arrayOfNumbers.push(i);
    }
  
    arrayOfNumbers.forEach((item) => {
      switch (true) {
        case item % 3 === 0 && item % 5 === 0:
          sortedArray.push('fizzbuzz');
          break;
        case item % 3 === 0:
          sortedArray.push('fizz');
          break;
        case item % 5 === 0:
          sortedArray.push('buzz');
          break;
        case item % 3 !== 0:
          sortedArray.push(item);
          break;
      }
    });
     
    return newArr;
  };


// Currying functions: multiply all elements in an array
const multiplyAll = (arrOfnumbers) => (multiplyDigit) => {
    return arrOfnumbers.map((item) => {
      return item * multiplyDigit;
    });
  };



// Shortest Word 
const shortestWord = (thisWord) => {
    let stringArray = thisWord.split(' ');
    let shortWord;
    let shortestLength = stringArray[0].length;
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length < shortestLength) {
        shortestLength = stringArray[i].length;
        shortWord = stringArray[i];
      }
    }
    return shortWord;
  };

// Square every Elements 
const squreEveryDigit = (thisElements) => {
    let word = '';
    let result = thisElements.toString().split('').map((item) => {
        return item * item;
      });
    for (i = 0; i < result.length; i++) {
      word += result[i];
    }
    word = Number(word);
    return word;
  };

// Easy-mathematical-callback 
function processArray(firstParameters, secondParameters) {
    return arr.map((element) => {
      return secondParameters(element);
    });
  }
  