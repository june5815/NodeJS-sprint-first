// 입력값에 맞춰 안에 셋팅해놓은대로 출력값이 나오는 코드
// 함수 정의하기
function addOne(x) {
  return x + 1;
}
// 함수 실행하기
const y1 = addOne(2);
console.log(y1);

const y2 = addOne(41);
console.log(y2);

// //유저 프로필을 문자열로 돌려주는 함수 만들기
// function makeProfile(user) {
//   return `이름 : ${user.name}, 나이: ${user.age}`;
// }
// const users = [
//   { name: '서은', age: 25 },
//   { name: '주은', age: 20 }
// ];

// console.log(makeProfile(users[0]));
// console.log(makeProfile(users[1]));

// //1. users 배열에 모든 유저를 추가한다.
// //2. 유저 5명의 프로필을 모두 출력해주세요. for문, 함수

const user1 = {
  userName: "박지윤",
  userAge: 22,
};
const user2 = {
  userName: "김혜령",
  userAge: 19,
};
const user3 = {
  userName: "김민석",
  userAge: 23,
};
const user4 = {
  userName: "박지윤",
  userAge: 22,
};
const user5 = {
  userName: "김혜령",
  userAge: 19,
};
const user6 = {
  userName: "김민석",
  userAge: 23,
};

const users = [user1, user2, user3, user4, user5];

function makeProfile(user) {
  return `이름 : ${user.userName}, 나이: ${user.userAge}`;
}

for (let i = 0; i < users.length; i++) {
  console.log(makeProfile(users[i]));
}

// // i < 5  => 이렇게 작성하면, 0~5중 없는 유저가 있으면, 'undefined'이 나온다. 그렇기 때문에 숫자로 인자를 넣어주는 것보다
// // length를 사용하여, users.length로 작성하여,
// for (let i = 0; i < 9; i = i + 1) {
//   console.log(makeProfile(users[i]));
// }
