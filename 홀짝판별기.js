// function 함수명(매개변수) {
//     코드를 작성해 주세요.
// }

// console.log(함수명(10)); 결과값 "짝수";
// console.log(함수명(7)); 결과값 "홀수";

// 정답
function num(number) {
  if (number % 2 === 0) {
    return "짝수";
  } else return "홀수";
}

console.log(num(10));
console.log(num(7));
