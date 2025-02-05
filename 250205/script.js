// console.log(document.querySelectorAll("p")[0]);

const newP = document.createElement("p");

//// 방식 1 (html에는 없는 "typescript"라는 P태그 생성)
// newP.innerText = "Typescript";

// 방식 2
const textNode = document.createTextNode("Typescript");

newP.appendChild(textNode);
//

document.body.appendChild(newP);
