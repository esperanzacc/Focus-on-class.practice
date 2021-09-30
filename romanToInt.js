// var romanToInt = function (s) {
//   //假設s是III
//   let currentValue = 0;
//   for (let c = 0; c < s.length; i++) {
//     //迴圈的意思
//     if (s[c] === "I") {
//       currentValue = currentValue + 1;
//     } else if (s[c] === "V") {
//       currentValue = currentValue + 5;
//     } else if (s[c] === "X") {
//       currentValue = currentValue + 10;
//     } else if (s[c] === "L") {
//       currentValue = currentValue + 50;
//     } else if (s[c] === "C") {
//       currentValue = currentValue + 100;
//     } else if (s[c] === "D") {
//       currentValue = currentValue + 500;
//     } else if (s[c] === "M") {
//       currentValue = currentValue + 1000;
//     }
//   }
// };

var romanToInt = function (s) {
  let currentValue = 0;
  for (let c = 0; c < s.length; c++) {
    if (s[c] === "I") {
      currentValue = currentValue + 1;
    } else if (s[c] === "V" && s[c - 1] === "I") {
      currentValue = currentValue + 5 - 2;
    } else if (s[c] === "V") {
      currentValue = currentValue + 5;
    } else if (s[c] === "X" && s[c - 1] === "I") {
      currentValue = currentvalue + 10 - 2;
    } else if (s[c] === "X") {
      currentValue = currentValue + 10;
    } else if (s[c] === "L" && s[c - 1] === "X") {
      currentvalue = currentValue + 50 - 20;
    } else if (s[c] === "L") {
      currentValue = currentValue + 50;
    } else if (s[c] === "C" && s[c - 1] === "X") {
      currentValue = currentValue + 100 - 20;
    } else if (s[c] === "C") {
      currentValue = currentValue + 100;
    } else if (s[c] === "D" && s[c - 1] === "C") {
      currentValue = currentValue + 500 - 200;
    } else if (s[c] === "D") {
      currentValue = currentValue + 500;
    } else if (s[c] === "M" && s[c - 1] === "C") {
      currentValue = currentValue + 1000 - 200;
    } else if (s[c] === "M") {
      currentValue = currentValue + 1000;
    }
  }
  return currentValue;
};

console.log(romanToInt("MCMXCIV")); //result will be 1994
