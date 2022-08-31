import { cluesArray } from "./data/clues.js";
//Grabbing DOM elements to use for functions
const clueOne = document.querySelector(".game__clueOne");
const clueTwo = document.querySelector(".game__clueTwo");
const clueThree = document.querySelector(".game__clueThree");
const clueFour = document.querySelector(".game__clueFour");
const container = document.querySelector(".game");
const martyRefresh = document.querySelector(".game__marty");
const martyContainer = document.querySelector(".game__martyContainer");
const inputBox = document.querySelector(".input__code");
const inputContainer = document.querySelector(".input");
const gameboard = document.querySelector(".game__img");
const gameHeading = document.querySelector(".home__title");

//This is a global array to count User clicks
let click = 0;

//This listens for when the user clicks and sets of the clickCounter function
gameboard.addEventListener("click", () => {
  clickCounter();
});

//This listens for when the first clue is clicked and changes DOM elements
cluesArray.forEach(() => {
  clueOne.addEventListener("click", () => {
    removeContent();
    const clue = cluesArray[1];
    container.innerHTML = openClue(clue);
  });
});

//This listens for when the second clue is clicked and changes Dom elements
cluesArray.forEach(() => {
  clueTwo.addEventListener("click", () => {
    removeContent();
    const clue = cluesArray[2];
    container.innerHTML = openClue(clue);
  });
});

//This listens for when the third clue is clicked and changes DOM elements
cluesArray.forEach(() => {
  clueThree.addEventListener("click", () => {
    removeContent();
    const clue = cluesArray[3];
    container.innerHTML = openClue(clue);
  });
});

//This listens for when the fourth clue is clicked and changes DOM elements
cluesArray.forEach(() => {
  clueFour.addEventListener("click", () => {
    removeContent();
    const clue = cluesArray[4];
    container.innerHTML = openClue(clue);
  });
});

//This listens for when the user types numbers into the input box
inputBox.addEventListener("input", () => {
  userInput();
});

//This listens for when the Marty img is pressed to refresh the page
martyRefresh.addEventListener("click", () => {
  window.location.reload();
});

//This function is for counting how many times the user clicks and sends them to the Game Over Screen
const clickCounter = () => {
  click += 1;
  if (click === 3) {
    wrongClick();
  }
};

//This function is to erase container and inputContainer HTML
const removeContent = () => {
  container.innerHTML = "";
  inputContainer.innerHTML = "";
};

//This function will call on removeContent and gameOverScreen
const wrongClick = () => {
  removeContent();
  gameOverScreen();
};

//This function will change the HTMl to create a Game Over Screen
const gameOverScreen = () => {
  martyContainer.innerHTML = "";
  gameHeading.innerHTML = "You Lost! Try Again.";
  gameHeading.style.color = "#ff6961";
  container.innerHTML += openHattie();
};

//This function will see in the input code is correct and call on contentRemove and youWon
const userInput = () => {
  const inputAnswer = 26789;
  if (inputBox.value == inputAnswer) {
    removeContent();
    youWon();
  }
};

//This function will change the HTML to create a You Won Screen
const youWon = () => {
  martyContainer.innerHTML = "";
  gameHeading.innerHTML = "You Won! Marty is Free!";
  gameHeading.style.color = "#E7D27C";
  container.innerHTML += winnerScreen();
  inputContainer.innerHTML += exitDoor();
};

//This function will change DOM HTML that creates the You Won Screen
const winnerScreen = () => {
  return `<div class= "winnerScreen">
  <img src="./assets/happyMarty.png" alt="Marty Marshmallow" class="game__happyMarty" />
  </div>`;
};

//This function will change DOM HTML to create a link button to exit the game after you win
const exitDoor = () => {
  return `<div class= "exit">
  <a href="./index.html"><button class="home__refresh">Exit Here!</button></a>
  </div>`;
};

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

//This function will change DOM HTML to create the Game Over Screen
const openHattie = () => {
  return `<div class="hattieContainer">
  <img src="./assets/hattieOver.png" alt="Hattie Hot-Choclate" class="game__hattie" />
</div>`;
};
