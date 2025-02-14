// 브라우저 새로고침 > 뒤에 이미지 변경되게

// window > onlaod : 문서를 로드한다면 > 뒤 배경 이미지 변경

window.onload = () => {
  const bgCount = 5;

  // 절대 5가 되지 못함 > +1 주고 소수점 없애기
  let randomNumber = Math.floor(Math.random() * bgCount + 1);
  document.body.style.backgroundImage = `url("./images/bg-${randomNumber}.jpg")`;
};
