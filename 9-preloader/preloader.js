// selectors
let controlBtn = document.querySelector(".control-btns");
const videoContainer = document.querySelector(".video-container");

// event listener
controlBtn.addEventListener("click", vidControls);

//function to pause and play the video
function vidControls() {
  if (!controlBtn.classList.contains("slide")) {
    controlBtn.classList.add("slide");
    videoContainer.pause();
  } else {
    controlBtn.classList.remove("slide");
    videoContainer.play();
  }
}

// preloader

// the preloader will be visible as default and will be hidden once video is loaded

const preloader = document.querySelector(".preloader");

window.addEventListener("load", hidePreloader);

function hidePreloader() {
  preloader.classList.add("hide-preloader");
}
