const heading = document.querySelector("h1");
heading.style.visibilty = "hidden";

const finalTitle = heading.textContent;

if (!sessionStorage.getItem("finishedAnimation")) { 
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
  
  sessionStorage.setItem("finishedAnimation", "true");
}

const caret = document.querySelector("#caret");

setInterval(() => {
  if (heading.textContent === finalTitle) { 
    caret.classList.toggle("hide");
  }
}, 450);

const currentPage = document.querySelector(".current");

let currentPageText = currentPage.textContent;
currentPage.style.width = `${currentPageText.length}ch`;

setInterval(() => {
  if (currentPageText.substring(currentPageText.length - 3, currentPageText.length) !== "...") {
    currentPageText = currentPageText.concat(".");
  }
  else {
    currentPageText = currentPageText.substring(0, currentPageText.length - 3);
  }
  currentPage.textContent = currentPageText;
}, 500);
