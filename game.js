import { cluesArray } from "./data/clues.js";
//Need to grab the button
const clueOne = document.querySelector(".game__clueOne");
const container = document.querySelector(".game");
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
cluesArray.forEach((clue) => {
  clueOne.addEventListener("click", () => {
    container.innerHTML = "";
    container.innerHTML += openClue(clue);
  });
});
