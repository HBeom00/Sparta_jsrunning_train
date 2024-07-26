// function 함수명(매개변수1, 매개변수2, 매개변수3) {
//   // 코드를 작성해주세요.
// }

// 함수명(3, "+", 6); // 결과값 9
// 함수명(11, "-", 6); // 결과값 5
// 함수명(6, "*", 3); // 결과값 18
// 함수명(15, "+", 3); // 결과값 5

// 정답
function numOper(num1, oper, num2) {
  switch (oper) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

console.log(numOper(3, "+", 6));
console.log(numOper(11, "-", 6));
console.log(numOper(6, "*", 3));
console.log(numOper(15, "/", 3));
