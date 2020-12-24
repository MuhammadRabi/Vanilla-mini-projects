// creaing array of colors
let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let specialBtn = document.getElementById("btn-generate");
colorText = document.querySelector(".color");

// add eventlistener on button

specialBtn.addEventListener("click", (e) => {
  let hexColor = "#";

  // loop for 6 digits for hex code
  for (i = 0; i < 6; i++) {
    hexColor += hexArr[generateColor()];
  }

  // changing the background color of page
  document.body.style.backgroundColor = hexColor;

  // writing down the hex code of generated color
  colorText.textContent = hexColor;
});

function generateColor() {
  return Math.floor(Math.random() * hexArr.length);
}
