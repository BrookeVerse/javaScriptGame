import { cluesArray } from "./data/clues.js";
//Need to grab the button
const clueOne = document.querySelector(".game__clueOne");
const clueTwo = document.querySelector(".game__clueTwo");
const clueThree = document.querySelector(".game__clueThree");
const clueFour = document.querySelector(".game__clueFour");
const container = document.querySelector(".game");
const refreshPress = document.querySelector(".game__marty");
const inputBox = document.querySelector(".input__code");
const inputContainer = document.querySelector(".input");
//function for content to change

const openClue = (clue) => {
  return `<div class="clueContainer">
    <div class="clue"> 
        <h3 class="clue__heading">${clue.title}</h3>
        <p class="clue__info">${clue.clue}</p>
        <p class="clue__number">${clue.number}</p> 
    </div>
</div>`;
};

//Function to collect data from the object array
cluesArray.forEach(() => {
  clueOne.addEventListener("click", () => {
    container.innerHTML = "";
    const clue = cluesArray[0];
    container.innerHTML = openClue(clue);
  });
});

//eventlisterner to call clue two
cluesArray.forEach(() => {
  clueTwo.addEventListener("click", () => {
    container.innerHTML = "";
    const clue = cluesArray[1];
    container.innerHTML = openClue(clue);
  });
});

//event listener for clue three
cluesArray.forEach(() => {
  clueThree.addEventListener("click", () => {
    container.innerHTML = "";
    const clue = cluesArray[2];
    container.innerHTML = openClue(clue);
  });
});

//event listener for clue four
cluesArray.forEach(() => {
  clueFour.addEventListener("click", () => {
    container.innerHTML = "";
    const clue = cluesArray[3];
    container.innerHTML = openClue(clue);
  });
});

//event listener for when the page needs refreshing
refreshPress.addEventListener("click", () => {
  window.location.reload();
});

//event listener for when the answer is put into the input box
inputBox.addEventListener("input", () => {
  const inputAnswer = 26789;
  if (inputBox.value == inputAnswer) {
    inputContainer.innerHTML = "";
    inputContainer.innerHTML += exitDoor();
  }
});

//function that add html to make a button that takes you back to the home screen
const exitDoor = () => {
  return `<div class=exit>
         <a href="./index.html"><button class="home__refresh">Exit Here!</button></a>
    </div>`;
};
