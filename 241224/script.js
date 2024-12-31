const form = document.querySelector("form");
const word = document.querySelector("#word");
const h1 = document.querySelector("h1");

h1.style.color = "#02c13c";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const uservalue = word.value;
  console.log(uservalue);
  alert(uservalue);
});
