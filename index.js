//Option Button
//When its clicked changes HTML to show an option to change the sound.
const infoButton = document.querySelector(".menu__infoButton");
const menuBox = document.querySelector(".menuContainer");
const homeButton = document.querySelector(".info__button");
//grabbing the button

const menuContent = menuBox;

const openInfoBox = () => {
  return `<div class="infoContainer">
        <div class="info"> 
            <h3 class="info__heading">Welcome To Save My Mallow!</h3>
            <p class="info__instruction">What Is The Game<br>
            You are Marty the marshmallow, you have been trapped in a room.
            Work out the clues to escape, or Hattie the Hot Choclate will get you. 
            </p> 
            <button class="info__button">Home</button>
        </div>
    </div>`;
};

//function that will change the html to open a new box that will
//show you the info

infoButton.addEventListener("click", () => {
  menuContent.innerHTML = "";
  menuBox.innerHTML = openInfoBox();
});
//An event listener that will open the info box

//Home Button Operation
