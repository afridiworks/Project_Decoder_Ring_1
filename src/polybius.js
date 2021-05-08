const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //DECLARE NEEDED VARIABLES
    let result = [];
    let newArr = [];
    let decodeResult = [];
    //ENCODE
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        let lowerCaseInput = input[i].toLowerCase(); //IGNORE CAPS
        switch (lowerCaseInput) {
          case " ":
            result.push(" ");
            break;
          case "a":
            result.push(11);
            break;
          case "b":
            result.push(21);
            break;
          case "c":
            result.push(31);
            break;
          case "d":
            result.push(41);
            break;
          case "e":
            result.push(51);
            break;
          case "f":
            result.push(12);
            break;
          case "g":
            result.push(22);
            break;
          case "h":
            result.push(32);
            break;
          case "i":
          case "j":
            result.push(42);
            break;
          case "k":
            result.push(52);
            break;
          case "l":
            result.push(13);
            break;
          case "m":
            result.push(23);
            break;
          case "n":
            result.push(33);
            break;
          case "o":
            result.push(43);
            break;
          case "p":
            result.push(53);
            break;
          case "q":
            result.push(14);
            break;
          case "r":
            result.push(24);
            break;
          case "s":
            result.push(34);
            break;
          case "t":
            result.push(44);
            break;
          case "u":
            result.push(54);
            break;
          case "v":
            result.push(15);
            break;
          case "w":
            result.push(25);
            break;
          case "x":
            result.push(35);
            break;
          case "y":
            result.push(45);
            break;
          case "z":
            result.push(55);
            break;
        }
      }
      finalResult = result.join("");
      console.log(finalResult);
      return finalResult;
    }
    //DECODE
    if (encode === false) {
      if ((input.length - input.split(" ").length - 1) % 2 != 0) {
        console.log(false);
        return false;
      }
      for (let i = 0; i < input.length; i++) {
        if (input.charAt([i], [i] + 1) !== " ") {
          newArr.push(input.charAt([i]) + input.charAt([i + 1]));
        }
        if (input.charAt([i]) === " ") {
          newArr.push(" ", " ");
        }
      }
      for (let i = 0; i < newArr.length; i += 2) {
        decodeResult.push(newArr[i]);
      }

      for (let i = 0; i < decodeResult.length; i++) {
        if (decodeResult[i] === " ") {
          result.push(" ");
        }

        if (decodeResult[i] !== " ") {
          let letterToNum = parseInt(decodeResult[i]);
          if (letterToNum === "undefined") {
            result.push(" ");
          }
          // switch (letterToNum) {
          //   case "11":
          //     result.push("a");
          //     break;
          //   case "21":
          //     result.push("b");
          //     break;
          //   case "31":
          //     result.push("c");
          //     break;
          //   case "41":
          //     result.push("d");
          //     break;
          //   case "51":
          //     result.push("e");
          //     break;
          //   case "12":
          //     result.push("f");
          //     break;
          //   case "22":
          //     result.push("g");
          //     break;
          //   case "32":
          //     result.push("h");
          //     break;
          //   case "42":
          //     result.push("i/j");
          //     break;
          //   case "52":
          //     result.push("k");
          //     break;
          //   case "13":
          //     result.push("l");
          //     break;
          //   case "23":
          //     result.push("m");
          //     break;
          //   case "33":
          //     result.push("n");
          //     break;
          //   case "43":
          //     result.push("o");
          //     break;
          //   case "53":
          //     result.push("p");
          //     break;
          //   case "14":
          //     result.push("q");
          //     break;
          //   case "24":
          //     result.push("r");
          //     break;
          //   case "34":
          //     result.push("s");
          //     break;
          //   case "44":
          //     result.push("t");
          //     break;
          //   case "54":
          //     result.push("u");
          //     break;
          //   case "15":
          //     result.push("v");
          //     break;
          //   case "25":
          //     result.push("w");
          //     break;
          //   case "35":
          //     result.push("x");
          //     break;
          //   case "45":
          //     result.push("y");
          //     break;
          //   case "55":
          //     result.push("z");
          //     break;
          if (letterToNum === 11) {
            result.push("a");
          }
          if (letterToNum === 21) {
            result.push("b");
          }
          if (letterToNum === 31) {
            result.push("c");
          }
          if (letterToNum === 41) {
            result.push("d");
          }
          if (letterToNum === 51) {
            result.push("e");
          }
          if (letterToNum === 12) {
            result.push("f");
          }
          if (letterToNum === 22) {
            result.push("g");
          }
          if (letterToNum === 32) {
            result.push("h");
          }
          if (letterToNum === 42) {
            result.push("(i/j)");
          }
          if (letterToNum === 52) {
            result.push("k");
          }
          if (letterToNum === 13) {
            result.push("l");
          }
          if (letterToNum === 23) {
            result.push("m");
          }
          if (letterToNum === 33) {
            result.push("n");
          }
          if (letterToNum === 43) {
            result.push("o");
          }
          if (letterToNum === 53) {
            result.push("p");
          }
          if (letterToNum === 14) {
            result.push("q");
          }
          if (letterToNum === 24) {
            result.push("r");
          }
          if (letterToNum === 34) {
            result.push("s");
          }
          if (letterToNum === 44) {
            result.push("t");
          }
          if (letterToNum === 54) {
            result.push("u");
          }
          if (letterToNum === 15) {
            result.push("v");
          }
          if (letterToNum === 25) {
            result.push("w");
          }
          if (letterToNum === 35) {
            result.push("x");
          }
          if (letterToNum === 45) {
            result.push("y");
          }
          if (letterToNum === 55) {
            result.push("z");
          }
        }
      }
      console.log(result.join(""));
      return result.join("");
    }
  }
  /* 
---------------------------------------------------------------------------------------------
I GOT SO FRUSTRATED WITH THE SWTICH STATEMENT IN THE DECODE SECTION THAT I GAVE UP AND REDID IT ALL TO IF STATEMENTS.  CAN YOU PLEASEEEE TELL ME WHY THE SWITCH DIDNT WORK IN THIS CASE IN THE FEEDBACK SECTION?  I REALLY WOULD APPRECIATE IT.
I LEFT IT SO THAT YOU CAN UNCOMMENT AND SEE THE ODD ERRORS I WAS GETTING
---------------------------------------------------------------------------------------------
*/
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
