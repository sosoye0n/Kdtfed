const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const age = document.querySelector("#age");

const today = new Date();

current.innerText = `${today.getFullYear()}년  ${
  today.getMonth() + 1
}월  ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분❤`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // ms 연월일(인자값으로 쪼개는 방법으로)
  // 사용자 : 2월 >> 컴퓨터는 1로 받아들임
  // 생년월일에 대한 ms 값 찾아오기
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  // 얼마나 시간이 흘렀는지 > passed
  const passed = today.getTime() - birthDay.getTime();
  // ms의 값이니까
  // 하루 (24 * 60 * 60 * 1000)
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAge = Math.floor(passed / (24 * 60 * 60 * 1000) / 365 + 1);

  resultDays.innerText = `날짜로는 ${passedDays}일이 흐르고`;
  resultHours.innerText = `시간으로는 몇 ${passedHours}시간이 흐르고`;
  age.innerText = `제 나이는 ${passedAge}살 입니다.`;
});
