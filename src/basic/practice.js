// 문제 1
// 0부터 9까지의 숫자 중에서 짝수만 출력하세요
let j = 0;
while (j < 10) {
  console.log(j);
  j = j + 2;
}

// 문제 2
// break를 사용해서
// 0부터 9까지의 숫자 중에서 홀수만 출력하세요
let i = 1;
while (true) {
  console.log(i);
  if (i === 9) {
    break;
  }
  i = i + 2;
}

// 문제 3
// 0부터 9까지 짝수를 for 반복문으로 출력하세요
for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}
console.log("여기부터 오전 수업 종료, 이 다음부터 오후 수업 시작");

// 문제 4
// 2 이상 9 이하의 자연수 n이 주어지면 구구단 중 n단을 출력하는 함수를 작성하세요.
// 예를 들어 n이 3인 경우 3단이 출력되면 됩니다.
// 출력 예시
// 3 X 1 = 3
// 3 X 2 = 6
// ...
// 3 X 9 = 27

function printGuguda(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`);
  }
}
printGuguda(3);

// 문제 5
// 양의 정수 n이 주어지면 1부터 n까지 합을 리턴하는 함수를 작성하세요.\
/** 입력 : 양의 정수 n
 * 출력 : 1부터 n까지의 합
 * 조건 : 합계를 return하는 함수 작성
 */

function makeSum(n) {
  let sum = 0;

  //반복문
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(makeSum(5));
console.log(makeSum(10));

// 문제 6
// 양의 정수 n과 k가 주어지면 1 이상 n 이하의 자연수중에서 k의 배수의 합을 리턴하는 함수를 작성하세요.
/**
 * 양의 정수 n, k
 * 1 <=n
 * k의 배수의 합
 * 리턴하는 함수
 */
//연산자 사용하면 됨 (tip)

function makeSum2(n, k) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(makeSum2(10, 3));
// 문제 7
// 2 이상의 양의 정수 n이 주어지면, n이 소수인지 아닌지 참 또는 거짓을 리턴하는 함수를 작성하세요.
// n이 소수인지 아닌지 참 또는 거짓을 리턴하는 함수를 작성하세요.
// 소수란? 3은 소수입니다. 3의 약수는 1,3
// 소수란? 7은 소수입니다. 7의 약수는 1, 7
// 소수란? 8은 소수가 아닙니다. 8의 약수는 1, 2, 4, 8

//   function checkPrimeNumber(n) {
//     if (n<)
//   }
//   function checkPrimeNumber(n) {
//     // n이 2면 소수
//     if (n ===2) return true;

//     // 2부터 n-1까지 나누어 떨어지는지 검사하기
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {

//       }
//     }
//     return true;
//   }

// console.log(checkPrimeNumber(3)); // true
// console.log(checkPrimeNumber(7)); // true
// console.log(checkPrimeNumber(8)); // false
// 문제 8
// n이 주어지는 경우, 1 이상 n 이하의 양의 정수 5개를 뽑아서 배열에 담아 리턴하는 함수를 작성하세요.
// n은 5보다 크거나 같습니다.
// 참고!
// Math.random(): 이 함수는 0 이상 1 미만의 소수를 무작위로 반환합니다
// Math.floor(): 이 함수는 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환합니다.

// 문제 9
// 2 이상의 양의 정수 n이 주어지면, 2 이상 n 이하의 숫자 중에서 소수의 개수를 리턴하는 함수를 작성하세요.
