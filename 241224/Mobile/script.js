const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;

for (let i = 0; i < slideCount; i++) {
  const cloneSilde = slide[i].cloneNode(true);
  cloneSilde.classList.add("clone");
  slides.append(cloneSilde);
}

for (let i = slideCount - 1; i >= 0; i--) {
  const cloneSilde = slide[i].cloneNode(true);
  cloneSilde.classList.add("clone");
  slides.prepend(cloneSilde);
}
