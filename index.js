import { cluesArray } from "./data/clues.js";
//Option Button
//When its clicked changes HTML to show an option to change the sound.
const infoButton = document.querySelector(".menu__infoButton");
const clueButton = document.querySelector(".menu__clueButton");
const menuContent = document.querySelector(".menuContainer");
const homeButton = document.querySelector(".home__Button");
//grabbing the button

//Home Button Operation, refreshes the page
homeButton.addEventListener("click", () => {
  window.location.reload();
});

const openInfoBox = () => {
  return `<div class="infoContainer">
        <div class="info"> 
            <h3 class="info__heading">Welcome To Save My Mallow!</h3>
            <p class="info__instruction">What Is The Game?<br>
            You are Marty the marshmallow, and Hattie the Hot choclate has trapped you in a room.
            Each time you get a clue give it to Marty and find the next. Remember to keep note of the numbers.
            You will need them to escape. 
            </p> 
        </div>
    </div>`;
};

//This will change the HTML to show a clue from the Object Array
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
  clueButton.addEventListener("click", () => {
    menuContent.innerHTML = "";
    const clue = cluesArray[0];
    menuContent.innerHTML = openClue(clue);
  });
});

//function that will change the html to open a new box that will
//show you the info

infoButton.addEventListener("click", () => {
  menuContent.innerHTML = "";
  menuContent.innerHTML = openInfoBox();
});
//An event listener that will open the info box
