// //메모앱
// /** 로그인, 회원가입, 메모작성, 메모확인, 로그아웃 */
// // import , require = 필요도구들
// // const = 한번 정해지면 값이 바뀌지 않는 것들
// // let = 실행 중 값이 변할 수 있는 것들 (로그인 실패 -> 성공 처럼)
// // 가장 윗줄은 프로그램 로직에 쓸 '준비물'

// import fs from "fs";
// //파일 읽고 쓰는 기능이 없는 자바스크립트에게 기능을 주는 모듈이 'fs'
// //fs는 file system의 줄임말, nodejs에게 파일읽고 쓰는 도구 가져오고 'fs'로 쓸게.
// import promptSync from "prompt-sync"; //1. 도구 상자 가져오기
// //prompt-sync라는 라이브러리(=도구)가 있다.
// //터미널로부터 사용자가 입력한 것을 가져오는 기능을 가지고 있다. -> 반대로는 realine이 있다.
// //도구만 가져왔다. 쓸수 있는 상태가 아님
// const prompt = promptSync(); // 2. 도구 꺼내서 사용할 준비하기 (사용자 입력 받을 수 있는 코드)
// //도구를 꺼내서 쓸수 있게 만들어주는 과정
// // 이 줄 안쓰면 prompt라는 함수자체가 없기때문에 에러가 발생한다.

// let isLoginSuccess = false; //로그인 초기 값은 항상 false. let은 실행 중 값이 변할 수 있으므로 const 다음에 작성
// while (isLoginSuccess === false) {
//   const choiceStr = prompt("[1]. 로그인, [2]. 회원가입, [3]. 종료: ");
//   const choice = Number(choiceStr);
//   // 아래 3번 코드랑 달라진 부분은, 현부분의 코드는 로그인 성공하기 전까지 계속 메뉴가 뜨는 반복 구조야.
//   // 하지만 아래 3. 코드는 사용자가 메뉴를 선택하면 프로그램이 끝나거나 다음로직으로 넘어가

//   // /** 3. 실제 도구 사용하여 작업하기 (아래에 코드 작성함)
//   //  * const name = prompt("이름을 입력하세요: "); 형태임
//   //  * */
//   // while(true) {
//   //   const choiceStr = prompt("[1]. 로그인, [2]. 회원가입, [3]. 종료: ");
//   //   //while은 횟수가 정해지지 않은 반복문에 사용함.
//   //   //조건을 true로 줬고, 1~3중 선택하면 반복문 탈출하거나 break문을 만나면 끝남.
//   //   //사용자가 1(숫자)를 입력했지만, choiceStr로 인해서 문자(string)으로 입력받은 것 처럼 만든다.
//   //   const choice = Number(choiceStr);
//   //   //사용자가 '1'을 입력했지만, Number로 choiceStr을 감싸서 숫자로 인식하게 해준다.

//   if (choice === 1) {
//     //사용자가 1번 선택했는지 확인하는 로직(===값과 자료형이 모두 같은지 검증)
//     //if문으로 메뉴 선택하고!   조건이 맞으면 이메일과 비밀번호를 입력받는 로직이다
//     const inputEmail = prompt("이메일을 입력해주세요: ");
//     //사용자가 이메일을 터미널에 입력하면, 값이 inputEmail변수에 저장된다.
//     const inputPassword = prompt("비밀번호를 입력해주세요: ");

//     //[1]로그인 선택했으니, 로그인해보자.

//     const readContent = fs.readFileSync("users.csv");
//     //"users.csv"라는 파일 내용을 'sync(동기식)'으로 읽어오는 명령 // fs.은 file system이고, 파일을 읽고 쓰는 기능도구야
//     // '동기식'이란? 이 작업이 끝날때까지 다음 코드줄로 넘어가지 않는다는 뜻이다.
//     //fs 파일시스템 도구  + .readFileSync 파일을 동기적으로 읽는 기능 + users.csv 읽을 파일 이름
//     const content = String(readContent);
//     //컴퓨터 언어(buffer)를 사람이 읽을 수 있는 텍스트로 변환해달라는 요청
//     //string(readContent)
//     const parsedContent = content.trim().split("\n");
//     //content에 담긴 파일 문자열을 '줄 단위 배열'로 바꾸는 코드임
//     // content.trim()은 공백이나 줄바꿈 문자 제거하기 - " hello\nworld\n " → "hello\nworld"
//     // .split("\n")은 줄바꿈 기준으로 잘라서 배열로 만들기 - "hello\nworld" → ["hello", "world"]
//     // parsedContent는
//     /** 이렇게 생긴 코드를 
//    * email,password
//    * test@test.com,1234
//    * user@domain.com,abcd
// // 이렇게 바꿔주는 것
//    * [
//   "email,password",
//   "test@test.com,1234",
//   "user@domain.com,abcd"
// ]
//    */
//     // .split(",")을 하게 되면, ["test@test.com", "1234"]라는 배열로 생성되는데,
//     // 인덱스 0 → "test@test.com"
//     // 인덱스 1 → "1234"
//     for (let i = 0; i < parsedContent.length; i = i + 1) {
//       const storedEmail = parsedContent[i].split("."[0]);
//       const storedPassword = parsedContent[i].split("."[1]);
//       if (inputEmail === storedEmail && inputPassword === storedPassword) {
//         console.log("로그인 성공!");
//         isLoginSuccess = true;
//         break;
//       }
//     }
//     if (isLoginSuccess === false) {
//       console.log("일치하는 이메일 또는 비밀번호가 없습니다.");
//     } else {
//       break;
//     }
//   } else if (choice === 2) {
//     const inputEmail = prompt("이메일을 입력해주세요: ");
//     const inputPassword = prompt("비밀번호를 입력해주세요: ");
//     const inputNickname = prompt("닉네임을 입력해주세요: "); // 입력받은 값을 받음. 값만 받음

//     const readContent = fs.readFileSync("users.csv"); // 파일을 읽고, 0100102(buffer형태)로 반환한
//     const content = String(readContent); //buffer 데이터를 문자열(string)으로 변환함 그리고 변환한 후 content(변수이름)에 저장됨

//     //회원가입시 중복 확인을 위한 로직
//     let isEmailDuplicated = false; // 중복된 이메일이 발견되었는지 , 초기값은 flase(중복없음)
//     const parsedContent = content.trim().split("\n"); // 줄 단위로 나눠서 배열 만듦, 한줄= 한명의 회원 데이터
//     //content(user.csv파일) + .trim()  문자앞뒤에 잇는 불필요한 공백이나 줄바꿈 문자를 제거해라 요청 + 문자열 줄바꿈(\n)기준으로 잘라서 배열로 만들어라.
//     // 줄바꿈 전 "test1,123\ntest2,456\ntest3,789"
//     // 줄바꿈 후 [
//     // "test1,123",
//     // "test2,456",
//     // "test3,789"
//     //   ]
//     for (let i = 0; i < parsedContent.length; i = i + 1) {
//       //한줄씩 꺼내서 검사할 준비 (반복문)
//       // 반복문 시작 변수(i)를 0으로 설정 (이유는 첫번째 배열 요소는 0이니까)
//       // i가 배열길이보다 작을 동안만 실행해줘(몇개인지 모를땐 .length )
//       // i + 1은 반복이 한번끝나면 i 값을 1씩 증가해서 다음 배열 요소로 이동해줘(0 (1번째줄) -> 0+1 (2번째줄) -> 1+1 (3번째줄)
//       const storedEmail = parsedContent[i].split(",")[0]; // [0]번째 순서인 이메일 검토
//       if (inputEmail === storedEmail) {
//         //사용자 입력 이메일 = 저장된 이메일 완전히 같으면
//         isEmailDuplicated = true; // 중복표시 변수(isEmailDuplicated)값을 false -> ture로 바꿔줘 -> 회원가입 막음
//         console.log("이미 존재하는 이메일입니다");
//         break;
//       }
//     }
//     if (isEmailDuplicated === false) {
//       // false면, 사용자 입력 이메일이 저장된 이메일과 일치하는 것이 없다는 의미 //false일때 실행됨
//       fs.appendFileSync(
//         "users.csv",
//         `${inputEmail}, ${inputPassword}, ${inputNickname}\n`
//       );
//       // users.csv 파일 속 내용 끝에 새로운 데이터를 추가 저장해달란 요청(동기 방식)  // append : 추가
//       // csv 형식으로 이메일, 비밀번호, 닉네임 + 줄바꿈(\n)형식으로 문자 작성해줘
//       // csv 형식(( , 쉼표로 구분된 텍스트 형식 (ex) 이메일,비밀번호,닉네임)
//       //동기식 : 차례대로 일하는 방식 (ex) 편의점 계산대 한줄 -> 앞사람 결제 끝나야 다음 사람 결제 가능  (ex) 데이터백업 : 백업이 끝난 후에만 -> 백업 완료 메세지 보여줌
//       //비동기 : 여러줄 동시에 처리하는 방식 (ex) 카페에서 주문하고, 진동벨 받고, 기다리는 동안 친구랑 대화하고  (ex) 채팅 서버 : 한번에 여러 명이 요청할때 -> 이미지 글, 동영상 -> 비동기식으로 처리하여 저장하는 동안에 다른 메세지 처리 가능
//     }
//   } else if (choice === 3) {
//     //3번 선택할 경우
//     console.log("프로그램을 종료합니다.");
//     process.exit(0);
//   } else {
//     console.log("입력이 잘못되었습니다.");
//   }
// }
