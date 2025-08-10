import fs from "fs";
import promptSync from "prompt-sync";

const prompt = promptSync();
let me;
while (me === undefined) {
  const choiceStr = prompt("[1]. 로그인, [2]. 회원가입, [3]. 종료");
  const choice = Number(choiceStr);

  if (choice === 1) {
    // 로그인
    const inputEmail = prompt("이메일을 입력해주세요: ");
    const inputPassword = prompt("비밀번호를 입력해주세요: ");

    const readContent = fs.readFileSync("users.csv");
    const content = String(readContent);

    const parsedContent = content.trim().split("\n");
    let emailFound = false;

    for (let i = 0; i < parsedContent.length; i = i + 1) {
      const [storedEmail, storedPassword, storedNickname] =
        parsedContent[i].split(",");

      // 이메일+비밀번호 한번에 1회만 검증가능한 코드
      // if (inputEmail === storedEmail && inputPassword === storedPassword) {
      //   console.log("로그인 성공!");
      //   me = {
      //     email: storedEmail,
      //     password: storedPassword,
      //     nickname: storedNickname,
      //   }
      //   break;
      // }

      // 아이디 , 비밀번호 따로 검증가능한 코드
      // 1. 아이디 존재 여부 -> 존재하면 true
      if (inputEmail === storedEmail) {
        emailFound = true;

        // 2. 비밀번호 일치여부 -> 일치되면 로그인 성공
        if (inputPassword === storedPassword) {
          console.log("로그인 성공");
          me = {
            //me는 현재 로그인한 사람을 가리킴, me에 아래 정보 넣어서 저장하는 것임
            email: storedEmail,
            password: storedPassword,
            nickname: storedNickname,
          };
        }
        break; // 임무 끝났으니, 다음 코드실행하기, 더이상 이 반복문에 있을 필요 없다는 뜻
      }
    }
    // 아이디 또는 비밀번호가 불일치하여, 로그인 실패할 경우
    if (me === undefined) {
      if (emailFound) {
        // email은 users.csv에 있어! 비밀번호 입력이 틀렸다는 의미
        console.log("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      } else {
        // email이 users.csv에 없어! 이메일 입력이 틀렸다는 의미
        console.log("이메일이 존재하지 않습니다. 다시 입력해주세요. ");
      }
    }
  } else if (choice === 2) {
    // 회원가입
    const inputEmail = prompt("이메일을 입력해주세요: ");
    const inputPassword = prompt("비밀번호를 입력해주세요: ");
    const inputNickname = prompt("닉네임을 입력해주세요: ");

    const readContent = fs.readFileSync("users.csv");
    const content = String(readContent);

    let isEmailDuplicated = false; // 변수 만들기 , isEmailDuplicated로 이름 정함, 처음 값을 false로 정함 // 지금은 이메일 중복되지 않았다라는 상태를 저장하는 역할
    const parsedContent = content.trim().split("\n"); // content의 앞뒤 공백을 제거하고 줄바꿈기준으로 잘라서 배열 만들기
    for (let i = 0; i < parsedContent.length; i = i + 1) {
      const storedEmail = parsedContent[i].split(",")[0]; // parsedContent[i]- i번째 줄 데이터를 ','쉼표 기준으로 나누고(split), 첫번째 값[0]을 storeEmail변수에 저장해라.
      if (inputEmail === storedEmail) {
        isEmailDuplicated = true;
        console.log("이미 존재하는 이메일입니다");
        break;
      }
    }
    if (isEmailDuplicated === false) {
      // 변수를 검사하는 코드, isEmailDuplicated의 현재 값이 false인지 확인, false이면 {  }안의 코드 실행할 것.
      fs.appendFileSync(
        "users.csv",
        `${inputEmail},${inputPassword},${inputNickname}\n`
      ); // false면 중복아니니까, users.csv파일 맨끝에 새로운 회원정보 추가해라.
    }
  } else if (choice === 3) {
    // 3번을 입력하는 경우
    console.log("프로그램을 종료합니다.");
    process.exit(0); //0 은 정상종료(에러 없이 잘끝남) 1, 2등 다른 값이면 비정상 종료라는 의미(에러나 강제 종료)
  } else {
    console.log("입력이 잘못되었습니다."); // 1~3번 말고 다른 것을 입력한 경우
  }
}

console.log(`${me.nickname}님 안녕하세요.`);
console.log("[1]. 메모 작성하기, [2]. 메모 불러오기, [3]. 로그아웃");
