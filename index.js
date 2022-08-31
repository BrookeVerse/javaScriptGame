import { cluesArray } from "./data/clues.js";

//Grabbing DOM elements to use for functions
const infoButton = document.querySelector(".menu__infoButton");
const clueButton = document.querySelector(".menu__clueButton");
const menuContent = document.querySelector(".menuContainer");
const homeButton = document.querySelector(".home__Button");

//This listens for when the home button is blicked to refresh the page
homeButton.addEventListener("click", () => {
  window.location.reload();
});

//This listens for when the clue button is clicked and change DOM HTML
cluesArray.forEach(() => {
  clueButton.addEventListener("click", () => {
    menuContent.innerHTML = "";
    const clue = cluesArray[0];
    menuContent.innerHTML = openClue(clue);
  });
});

//This listens for when the info button is clicked and change the DOM HTML
infoButton.addEventListener("click", () => {
  menuContent.innerHTML = "";
  menuContent.innerHTML = openInfoBox();
});

//This function will change DOM HTML to create the clue Cards using the clueArray Objects
const openClue = (clue) => {
  return `<div class="clueContainer">
    <div class="clue"> 
        <h3 class="clue__heading">${clue.title}</h3>
        <p class="clue__info">${clue.clue}</p>
        <p class="clue__number">${clue.number}</p> 
    </div>
</div>`;
};

//This function will change DOM HTML to create the info card
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
