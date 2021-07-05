//  Even or Odd
function ifeven (evenNumber) {
    if (evenNumber%2 === 0) {
      return true
    }
    else {
        return false
    }
}


// Century From Year
function century (year) {
    return Math.ceil(year/100)
}


// Greatest common divisor 
function divisor(firstNumber, secondNumber) {
    let arr;
    for (i = 0; i <= firstNumber; i++) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        arr = i;
      }
    }
    return arr;
  }


// Factorial
function factorial (numOfFactorial) {
    let count = 1
    while (numOfFactorial != 0) {
        count = count * numOfFactorial;
        numOfFactorial = numOfFactorial - 1;
    }
    return count
}


// Duplication 
const ucntionForDuplicate = (paramOfDuplicate) => {
  let sort_paramOfDuplicate = paramOfDuplicate.sort();
  let resultOfDuplicate = [];
  for (i = 0; i < paramOfDuplicate.length; i++) {
    if (sort_paramOfDuplicate[i + 1] === paramOfDuplicate[i]) resultOfDuplicate.push(paramOfDuplicate[i]);
  }
  return resultOfDuplicate;
};

// Is a number prime 
const isPrime = (numberOfPrime) => {
    let arrForPrime = [];
  
    if (numberOfPrime === 1) {
      return true;
    } else {
      for (i = 1; i <= numberOfPrime; i++) {
        if (numberOfPrime % i === 0) {
          arrForPrime.push(i);
        }
      }
    }
  
    return arrForPrime.length === 2 ? true : false;
  };
  