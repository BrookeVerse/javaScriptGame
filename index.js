//Option Button
//When its clicked changes HTML to show an option to change the sound.
const infoButton = document.querySelector(".menu__infoButton");
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
            <p class="info__instruction">What Is The Game<br>
            You are Marty the marshmallow, you have been trapped in a room.
            Work out the clues to escape, or Hattie the Hot Choclate will get you. 
            </p> 
        </div>
    </div>`;
};

//function that will change the html to open a new box that will
//show you the info

infoButton.addEventListener("click", () => {
  menuContent.innerHTML = "";
  menuContent.innerHTML = openInfoBox();
});
//An event listener that will open the info box
