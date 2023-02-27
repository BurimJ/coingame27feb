("use strict");

window.addEventListener("load", start);
console.log(this);

function start() {
  console.log("start");

  // Start animationer
  startAnimations();
  //positions
  startPositions();

  // Registrer click
  registerClicks();
  //restart in random poisitions
  setupRestart();
}

function setupRestart() {
  document
    .querySelector("#coin1_container")
    .addEventListener("animationiteration", coinRestart);
  document
    .querySelector("#coin2_container")
    .addEventListener("animationiteration", coinRestart);
  document
    .querySelector("#coin2_container")
    .addEventListener("animationiteration", coinRestart);
}

function registerClicks() {
  document
    .querySelector("#coin1_container")
    .addEventListener("click", coinClicked);
  document
    .querySelector("#coin2_container")
    .addEventListener("click", coinClicked);
  document
    .querySelector("#coin3_container")
    .addEventListener("click", coinClicked);
  document
    .querySelector("#bomb_container")
    .addEventListener("click", bombClicked);
}

function startPositions() {
  document.querySelector("#coin1_container").classList.add("position1");
  document.querySelector("#coin2_container").classList.add("position2");
  document.querySelector("#coin3_container").classList.add("position3");
  document.querySelector("#bomb_container").classList.add("position4");
  document.querySelector("#heart_container").classList.add("position5");
}

function startAnimations() {
  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#coin2_container").classList.add("falling");
  document.querySelector("#coin3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");
}

function coinClicked() {
  console.log("Click coin");
  console.log(this);
  // Forhindr gentagne clicks
  let coin = document.querySelector("#coin1_container");

  coin.removeEventListener("click", coinClicked);

  // Stop coin container
  coin.classList.add("paused");

  // sæt forsvind-animation på coin sprite
  coin.querySelector("img").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", coinGone);
}

function coinGone() {
  console.log("coin gone");
  let coin = this; //document.querySelector("#coin1_container");

  // fjern event der bringer os herind
  coin.removeEventListener("animationend", coinGone);

  // fjern forsvind-animation fra sprite
  coin.querySelector("img").classList.remove("zoom_out");

  // fjern pause fra container
  coin.classList.remove("paused");

  // genstart falling animation på container
  coinRestart.call(this);

  // gør det muligt at klikke på coin igen
  coin.addEventListener("click", coinClicked);
}

function coinRestart() {
  let coin = this;
  coin.classList.remove("falling");
  coin.offsetWidth;
  coin.classList.add("falling");
  //removes the positions given
  document
    .querySelector("#coin1_container")
    .classList.remove(
      "position1",
      "position2",
      "position3",
      "position4",
      "position5"
    );
  // random position
  let pos = Math.floor(Math.random() * 5) + 1;
  document.querySelector("#coin1_container").classList.add("position" + pos);
}

function bombClicked() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document
    .querySelector("#bomb_container")
    .removeEventListener("click", bombClicked);

  // Stop bomb container
  document.querySelector("#bomb_container").classList.add("paused");

  // sæt forsvind-animation på bomb sprite
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: bombGone
  document
    .querySelector("#bomb_container")
    .addEventListener("animationend", bombGone);
}

function bombGone() {
  console.log("bomb gone");
  // fjern event der bringer os herind
  document
    .querySelector("#bomb_container")
    .removeEventListener("animationend", bombGone);

  // fjern forsvind-animation fra sprite
  document.querySelector("#bomb_sprite").classList.remove("zoom_in");

  // fjern pause fra container
  document.querySelector("#bomb_container").classList.remove("paused");

  // genstart falling animation på container
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#bomb_container").offsetWidth;
  document.querySelector("#bomb_container").classList.add("falling");

  // gør det muligt at klikke på bomb igen
  document
    .querySelector("#bomb_container")
    .addEventListener("click", bombClicked);
}
