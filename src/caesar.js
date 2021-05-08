const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    const alphabetArray = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    //IGNORE CAPS
    const lowerCase = input.toLowerCase();
    if (encode === false) {
      shift = -shift;
    }
    //GAIN ACCESS TO EACH LETTER
    const inputArray = [...lowerCase];
    //console.log(inputArray);

    //RETURN FALSE EARLY
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
      //KEEP SPACING
      if (inputArray[i] === " ") {
        result.push(" ");
        continue;
      }
      //KEEP NON ALPHA CHAR
      if (!alphabetArray.includes(inputArray[i])) {
        result.push(inputArray[i]);
        continue;
      }
      const indexOfLetter = alphabetArray.indexOf(inputArray[i]);
      let newIndex = indexOfLetter + shift;
      if (newIndex > 25) {
        newIndex = newIndex % 26;
      } else if (newIndex < 0) {
        newIndex += 26;
      }
      const convertedLetter = alphabetArray[newIndex];
      result.push(convertedLetter);
      //console.log(result);
    }
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
