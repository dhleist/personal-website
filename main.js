const heading = document.querySelector("h1");
const finalTitle = heading.textContent;

let currentTitle = finalTitle.charAt(0); 

heading.textContent = currentTitle;
heading.style.width = "1ch";
heading.style.visibility = "visible";

let index = 1;

let intervalID = setInterval(() => {
  if (index < finalTitle.length) {
    let currentCharacter = finalTitle.charAt(index);
    currentTitle = currentTitle.concat(currentCharacter); 
    heading.textContent = currentTitle;
    heading.style.width = `${index + 1}ch`;
    index++;
  }
  else {
    clearInterval(intervalID);
  }
}, 250);

const caret = document.querySelector("#caret");

setInterval(() => {
  if (currentTitle === finalTitle) { 
    caret.classList.toggle("hide");
  }
}, 450);
