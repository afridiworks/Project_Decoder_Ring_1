// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    input = input.toLowerCase();
    let checkForDuplicate = {};
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalMessage = "";

    //CHECK IF ALPHABET HAS UNIQUE CHARS
    for (let i = 0; i < alphabet.length; i++) {
      let character = alphabet[i];
      if (checkForDuplicate[character]) {
        return false;
      }
      checkForDuplicate[character] = true;
    }

    for (characters in input) {
      const character = input[characters];
      let inputValue = alphabet.indexOf(character);
      let actualValue = actualAlphabet.indexOf(character);
      //CHECK IF !CHAR IN ACTUAL
      if (alphabet.indexOf(character) === -1) {
        finalMessage += character;
        continue;
      }
      if (encode) {
        finalMessage += alphabet[actualValue];
      } else {
        finalMessage += actualAlphabet[inputValue];
      }
    }
    return finalMessage;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
