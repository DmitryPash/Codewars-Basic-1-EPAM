//count-characters-in-your-string
function countAllCharacters(stringOfCharacters) {
    let ObjectOfCharacters = {};
    let sortObject = str.split('').sort();
    sortObject.forEach((element) => {
      ObjectOfCharacters.hasOwnProperty(element)
        ? ObjectOfCharacters[element]++
        : (ObjectOfCharacters[element] = 1);
    });
    return ObjectOfCharacters;
  }