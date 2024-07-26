// 1. let uninitialized;
// console.log(uninitialized); // 결과값 < 빈칸 >
// 정답 : undefined

// 2. < 빈칸 > apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable
// 정답 : const

// 3. let lotto = [3, 8, 13, 19, 21, 32];
// console.log(lotto[3]); // 결과값 < 빈칸 >
// 정답 : 19

// 4.
// let mySchedule = "";
// console.log(mySchedule || false); // < 빈칸 >
// 정답 : false
// console.log(!!mySchedule); // < 빈칸 >
// 정답 : false
