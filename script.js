"use strict";

window.addEventListener("load", start);

function start() {
  console.log("start");

  // Start animationer
  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");

  // Registrer click
  document.querySelector("#coin1_container").addEventListener("click", coinClicked);
  document.querySelector("#bomb_container").addEventListener("click", bombClicked);
}


function coinClicked() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document.querySelector("#coin1_container").removeEventListener("click", coinClicked);
  
  // Stop coin container
  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin sprite
  document.querySelector("#coin1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#coin1_container").addEventListener("animationend", coinGone);
}

function coinGone() {
  console.log("coin gone");
  // fjern event der bringer os herind
  document.querySelector("#coin1_container").removeEventListener("animationend", coinGone);

  // fjern forsvind-animation fra sprite
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");
  
  // fjern pause fra container
  document.querySelector("#coin1_container").classList.remove("paused");

  // genstart falling animation på container
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#coin1_container").addEventListener("click", coinClicked);
}



function bombClicked() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document.querySelector("#bomb_container").removeEventListener("click", bombClicked);
  
  // Stop bomb container
  document.querySelector("#bomb_container").classList.add("paused");

  // sæt forsvind-animation på bomb sprite
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: bombGone
  document.querySelector("#bomb_container").addEventListener("animationend", bombGone);
}

function bombGone() {
  console.log("bomb gone");
  // fjern event der bringer os herind
  document.querySelector("#bomb_container").removeEventListener("animationend", bombGone);

  // fjern forsvind-animation fra sprite
  document.querySelector("#bomb_sprite").classList.remove("zoom_in");
  
  // fjern pause fra container
  document.querySelector("#bomb_container").classList.remove("paused");

  // genstart falling animation på container
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#bomb_container").offsetWidth;
  document.querySelector("#bomb_container").classList.add("falling");

  // gør det muligt at klikke på bomb igen
  document.querySelector("#bomb_container").addEventListener("click", bombClicked);
}