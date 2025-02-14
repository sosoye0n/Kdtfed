const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

// 선택한 요소보다 작은 index > event 부여
// 반복문 forEach ((인자값=매개변수 = star(다섯개의 star, index, array)) => {})

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let message = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로입니다";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요";
        imageURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥그래요";
        imageURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "맘에들어요";
        imageURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주좋아요";
        imageURL = "./img/star-lv5.png";
        break;
    }

    print.innerHTML = `<img src = "${imageURL}" ${message}>`;
  });
});

// stars.forEach((star, index) => {
//   star.addEventListener("click", () => {
//     stars.forEach((s, i) => {
//       if (i <= index) {
//         s.classList.add("active");
//       } else {
//         s.classList.remove("active");
//       }
//     });
//   });
// });
