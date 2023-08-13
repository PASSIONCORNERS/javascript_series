// High Order Function

// document.addEventListener("click", myFunc);

// function doubleMe(x) {
//   return 2 * x;
// }

// function trippleMe(x) {
//   return 3 * x;
// }

function calNum(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

let doubleMe = calNum(2);
let trippleMe = calNum(3);

console.log(trippleMe(4));

let myColors = ["blue", "yellow", "pink"];

myColors.forEach(myFunc);

function myFunc(item) {
  console.log(item);
}
