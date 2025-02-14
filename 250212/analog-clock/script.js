/* 
1도 = 파이/180
12 / 360도 = 각 30도씩 유지
30도 = 파이/6
*/
const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  const angle = (i + 1) * (Math.PI / 6);
  // 반지름 -8 = 132px
  // sin값 30도 = 1/2 > 66 / 나머지 공간
  // 이해 안되면 공식으로라도 외우는 것도 괜찮음
  const x =
    132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
  // 빗변 대비 밑면 -> cos // abs = 절대값
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  if (i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } else {
    nums[i].style.left = `${x}px`;
  }

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
    nums[i].style.top = `${y}px`;
  } else {
    nums[i].style.bottom = `${y}px`;
  }
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");

const clock = () => {
  const currentTime = new Date();

  // 1초당 6도씩 움직이게
  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;
  // 분
  let minitue = currentTime.getMinutes();
  let minitueAngle = minitue * 6;
  let minitueAgleValue = `rotate(${minitueAngle}deg)`;
  // 시침 - 분을 기준으로 각도 가져와야 > 분 : 30기준(30도 기준)
  let hour = currentTime.getHours();
  let hourAngle = hour * 30 + (minitue / 60) * 30;
  let hourAngleValue = `roatate(${hourAngle})deg`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minitueAgleValue;
  hourPointer.style.transform = hourAngleValue;
};

setInterval(clock, 1000);
